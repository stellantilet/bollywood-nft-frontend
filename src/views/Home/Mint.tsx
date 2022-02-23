import classNames from "classnames";
import { ContractReceipt, ContractTransaction, ethers } from "ethers";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ERC721Bollywood from "../../config/contracts/ERC721Bollywood";
import { useOnboardContext } from "../../context/OnboardContext";
import imageListing from "../../assets/img/listing.gif";
import { NetworkId } from "../../config/constants/types";

const Mint = () => {
  const { onboard } = useOnboardContext();
  const userState = onboard.getState();
  const disabled = !userState.address;
  const [loading, setLoading] = useState(false);

  const handleMint = async () => {
    const value = await onboard.walletCheck();
    if (!value) {
      return;
    }
    const userState = onboard.getState();
    const provider = new ethers.providers.Web3Provider(
      userState.wallet.provider
    );
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      ERC721Bollywood.address[userState.network as NetworkId],
      ERC721Bollywood.abi,
      signer
    );
    const price = await contract.price();
    setLoading(true);
    try {
      let tx: ContractTransaction = await contract.mint(1, {
        value: price,
      });
      let receipt: ContractReceipt = await tx.wait();
      const events = receipt.events?.filter((x) => {
        return x.event === "Transfer";
      });
      if (events && events.length > 0) {
        toast.success("Mint NFT successfully.");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
    setLoading(false);
  };
  useEffect(() => {});

  return (
    <div
      className={classNames({
        "container px-4 py-10 mx-auto text-gray-800 dark:text-gray-100 px-4":
          true,
      })}
    >
      <div
        className={classNames({
          "text-center max-w-2xl mx-auto shadow-md bg-purple-100 dark:bg-gray-800 rounded overflow-hidden sm:flex align-center":
            true,
        })}
      >
        <img
          className="w-full md:w-80 text-center overflow-hidden bg-cover"
          src={imageListing}
          alt="Listing"
        />
        <div className="p-8 mx-auto">
          <h2 className="uppercase text-3xl font-bold">Mint NFT</h2>
          <div className="mt-8">
            <strong>Price: &nbsp;&nbsp;</strong>
            <span>0.2 BNB</span>
          </div>
          <button
            disabled={disabled || loading}
            onClick={handleMint}
            className={classNames({
              "relative uppercase mt-4 rounded-full px-8 py-2 text-gray-100 shadow-md":
                true,
              "cursor-not-allowed bg-gray-400": disabled || loading,
              "bg-indigo-600 hover:bg-indigo-500": !disabled && !loading,
            })}
          >
            <span className="flex items-center">
              {loading && (
                <svg
                  className="animate-spin -ml-2 mr-2 h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              Mint
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mint;
