import classNames from "classnames";
import imgStory1 from "../../assets/img/story/story1.jpg";
import imgStory2 from "../../assets/img/story/story2.jpg";
import imgStory3 from "../../assets/img/story/story3.jpg";
import imgStory4 from "../../assets/img/story/story4.jpg";
import imgStory5 from "../../assets/img/story/story5.jpg";
import imgStory6 from "../../assets/img/story/story6.jpg";
import imgStory7 from "../../assets/img/story/story7.jpg";

const Story = () => {
  return (
    <div
      className={classNames({
        "container max-w-5xl px-4 py-10 mx-auto text-gray-800 dark:text-gray-100":
          true,
      })}
      id="story"
    >
      <h2 className="text-center text-3xl mb-4">Our Story</h2>
      <div className="grid grid-cols-2 gap-4">
        <img
          src={imgStory1}
          className="w-full object-cover"
          style={{ aspectRatio: "5/6" }}
          alt="Story1"
        />
        <img
          src={imgStory2}
          className="w-full object-cover"
          style={{ aspectRatio: "5/6" }}
          alt="Story2"
        />
        <img
          src={imgStory3}
          className="w-full object-cover"
          style={{ aspectRatio: "3/2" }}
          alt="Story3"
        />
        <img
          src={imgStory4}
          className="w-full object-cover"
          style={{ aspectRatio: "3/2" }}
          alt="Story4"
        />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <img
          src={imgStory5}
          className="w-full object-cover"
          style={{ aspectRatio: "1/1" }}
          alt="Story5"
        />
        <img
          src={imgStory6}
          className="w-full object-cover"
          style={{ aspectRatio: "1/1" }}
          alt="Story6"
        />
        <img
          src={imgStory7}
          className="w-full object-cover"
          style={{ aspectRatio: "1/1" }}
          alt="Story7"
        />
      </div>
      <div className="mt-8">
        <p>Our intention is to create the first NFT funded film.</p>
        <p className="mb-2">
          The conceptualisation of this project and the entire script is the
          brainchild of actor Vishal Malhotra who was also the first Indian
          actor to have released an NFT. A very small number of NFTs will be
          listed to ensure the rarity remains high.
        </p>
        <p>4 categories of NFTs are available for investors.</p>
        <p>Platinum, Gold, Silver &amp; Bronze.</p>
        <p className="mb-2">Each Category comes with its advantages.</p>
        <p className="mb-2">
          The collectors can collect in either the Ethereum or the Binance
          chain. Which ever suits them best. All collectors of this NFT will
          automatically become a Producer in this genesis project and will be
          mentioned by name in the Credits of the Film.
        </p>
        <p>
          A premiere will be held in Mumbai to release this film, where we will
          invite mainstream media and Celebrities to attend this Historical
          event. In the long run we intend to become the Go to platform for any
          individual who would like to distribute or exhibit their films which
          have been specifically created using crypto currency and NFTs or
          anything related to the Blockchain world. So join us and become a part
          of this historical project which will forever place your names in
          history.
        </p>
      </div>
    </div>
  );
};

export default Story;
