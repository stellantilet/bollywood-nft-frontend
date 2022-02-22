import classNames from "classnames";

const Footer = () => {
  return (
    <div
      className={classNames({
        "bg-blue-900": true,
      })}
    >
      <div
        className={classNames({
          "container mx-auto px-4 py-4 text-gray-100": true,
        })}
      >
        Copyright 2022 bollywood.io. Allright reserved
      </div>
    </div>
  );
};

export default Footer;
