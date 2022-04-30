import Image from "next/image";
import picture from "../../../data/profile-pic.jpg";

const ProfileImageContainer = () => {
  return (
    <div className="max-w-[30%] h-auto sm:max-w-none flex items-center rounded-full">
      <Image src={picture} alt="Me" className="rounded-full " />
    </div>
  );
};

export default ProfileImageContainer;
