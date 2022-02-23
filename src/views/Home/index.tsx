import classNames from "classnames";
import FAQ from "./FAQ";
import Mint from "./Mint";
import Team from "./Team";

const Home = () => {
  return (
    <div
      className={classNames({
        "text-gray-800 dark:text-gray-100": true,
      })}
    >
      <Mint />
      <Team />
      <FAQ />
    </div>
  );
};

export default Home;
