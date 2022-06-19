import Image from "next/image";
import picture from "../../../assets/profile-pic.jpg";

const ProfileImageContainer = () => {
  return (
    <div>
      <Image priority src={picture} alt="Me" className="rounded-full" />
    </div>
  );
};

export default ProfileImageContainer;
