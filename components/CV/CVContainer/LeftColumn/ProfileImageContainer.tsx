import Image from "next/image";
import picture from "../../../../data/profile-pic.jpg";

const ProfileImageContainer = () => {
  return <Image priority src={picture} alt="Me" className="rounded-full" />;
};

export default ProfileImageContainer;
