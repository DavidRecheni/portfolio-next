import Image from "next/image";
import picture from "../../../../data/profile-pic.jpg";

const ProfileImageContainer = () => {
  return (
    <div className="h-auto flex items-center rounded-full">
      <Image priority src={picture} alt="Me" className="rounded-full " />
    </div>
  );
};

export default ProfileImageContainer;
