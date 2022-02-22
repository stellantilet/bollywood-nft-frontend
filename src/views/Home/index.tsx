import classNames from "classnames";
import Mint from "./Mint";

const Home = () => {
  return (
    <div
      className={classNames({
        "text-gray-800 dark:text-gray-100": true,
      })}
    >
      <Mint />
    </div>
  );
};

export default Home;
