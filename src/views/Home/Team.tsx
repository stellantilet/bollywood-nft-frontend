import classNames from "classnames";
import photo1 from "../../assets/img/team/1.png";
import photo2 from "../../assets/img/team/2.png";
import { FaTwitter } from "react-icons/fa";
const TeamItem = ({
  image,
  name,
  position,
  twitter,
}: {
  image: any;
  name: string;
  position: string;
  twitter?: string;
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg dark:bg-gray-800 relative">
      <img
        className="w-full aspect-[4/3] object-cover"
        src={image}
        alt={name}
      />
      <div className="p-2">
        <h3 className="flex justify-between items-center font-bold">
          <span>{name} </span>
          <a href={twitter}>
            <FaTwitter />
          </a>
        </h3>
        <div className="text-sm">{position}</div>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div
      className={classNames({
        "container max-w-md px-4 py-10 mx-auto text-gray-800 dark:text-gray-100":
          true,
      })}
      id="team"
    >
      <h2 className="text-center text-3xl mb-2">Our Team</h2>
      <div className="grid grid-cols-2 gap-4">
        <TeamItem
          image={photo1}
          name={"Vishal Malhotra"}
          position="Founder"
          twitter="https://twitter.com/Vishhman?t=8aQL--RINvsCNBB8ovMvPQ&amp;s=09"
        />
        <TeamItem
          image={photo2}
          name={"Rick De"}
          position="Artist"
          twitter="https://twitter.com/rdtect?t=DGVCjtQTx72pXiVE1KCFUw&amp;s=09"
        />
      </div>
    </div>
  );
};

export default Team;
