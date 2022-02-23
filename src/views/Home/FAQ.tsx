import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import classNames from "classnames";

const FAQItem = ({ header, content }: { header: any; content: any }) => {
  return (
    <Disclosure as="div" className="mt-2">
      {({ open }) => (
        <>
          <Disclosure.Button
            className={classNames({
              "flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75":
                true,
              "dark:bg-gray-800 dark:text-purple-100 dark:hover:bg-gray-700":
                true,
            })}
          >
            <span>{header}</span>
            <ChevronUpIcon
              className={`${open ? "transform rotate-180" : ""} w-5 h-5`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm ">
            {content}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

const FAQ = () => {
  return (
    <div className="container px-4 py-10 mx-auto" id="faq">
      <h2 className="text-center text-3xl mb-2">Frequently asked questions</h2>
      <FAQItem
        header="What’s unique about CSS Club NFTs?"
        content="CSS Club NFTs depict the saga of a cinephile in the metaverse. The art uses a unique base face vector to produce multiple characters based on Indian cinema. From “Gabbar in Sholey” to “Rohit in Kaho na pyar hai”, every movie aficionado will connect with these characters and bring reminiscence of the good times they had while enjoying these characters in the films."
      />
      <FAQItem
        header="What are the benefits of holding a CSS Club NFT?"
        content="CSS Club project is utility driven project which means that NFT's you hold will come with added benefits in real world scenarios.

        We will be building our own experience in metaverse using SandBox land. Holders can claim free VoxStar to experience metaverse which in itself is worth $100
        
        OG Stars will be able to earn more Maal coin - social token of CSS Club Metaverse
        
        Holders will get the benefit of future NFT drops and artists collaboration at discounted price.
        
        CSSC will be setting up community wallet which will allow them to reward community members.
        
        Get a chance to win movie ticket vouchers every week
        
        Special access to select nightclubs and cafes cross India
        
        Attend CSS Club private events ( for example musical shows, private movie screening, etc.) across India"
      />
      <FAQItem
        header="What’s unique about CSS Club NFTs?"
        content="CSS Club NFTs depict the saga of a cinephile in the metaverse. The art uses a unique base face vector to produce multiple characters based on Indian cinema. From “Gabbar in Sholey” to “Rohit in Kaho na pyar hai”, every movie aficionado will connect with these characters and bring reminiscence of the good times they had while enjoying these characters in the films."
      />
      <FAQItem
        header="What’s unique about CSS Club NFTs?"
        content={
          <a
            href="https://nft.wazirx.org/collection/CSSClub?sort=recent-desc"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            https://nft.wazirx.org/collection/CSSClub?sort=recent-desc
          </a>
        }
      />
      <FAQItem
        header="What’s unique about CSS Club NFTs?"
        content={
          <a
            href="https://nft.wazirx.org/collection/CSSClub?sort=recent-desc"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            https://nft.wazirx.org/collection/CSSClub?sort=recent-desc
          </a>
        }
      />
    </div>
  );
};
export default FAQ;
