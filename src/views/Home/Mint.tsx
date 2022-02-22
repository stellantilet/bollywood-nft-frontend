import classNames from "classnames";
import { ContractReceipt, ContractTransaction, ethers } from "ethers";
import ERC721Bollywood from "../../config/contracts/ERC721Bollywood";
import { useOnboardContext } from "../../context/OnboardContext";
import toast from "react-hot-toast";
import { useState } from "react";
import { RefreshIcon } from "@heroicons/react/outline";

const Mint = () => {
  const { onboard } = useOnboardContext();
  const userState = onboard.getState();
  const disabled = !userState.address;
  const [loading, setLoading] = useState(false);

  const handleMint = async () => {
    const provider = new ethers.providers.Web3Provider(
      onboard.getState().wallet.provider
    );
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      ERC721Bollywood.address.bscTestnet,
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

  return (
    <div
      className={classNames({
        "text-gray-800 dark:text-gray-100 px-4": true,
      })}
    >
      <div
        className={classNames({
          "container text-center text-gray-100 max-w-md mx-auto bg-purple-500 rounded my-4 p-4":
            true,
        })}
      >
        <h2 className="uppercase text-3xl font-bold">Mint NFT</h2>
        <button
          disabled={disabled || loading}
          onClick={handleMint}
          className={classNames({
            "relative uppercase mt-4 rounded-full px-8 py-2": true,
            "cursor-not-allowed bg-gray-400": disabled || loading,
            "bg-yellow-600 hover:bg-yellow-500": !disabled && !loading,
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
                  stroke-width="4"
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
  );
};

export default Mint;
