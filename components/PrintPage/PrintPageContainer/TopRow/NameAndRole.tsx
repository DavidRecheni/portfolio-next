import Link from "next/link";
import data from "../../../../data/CVData";

const NameAndRole: React.FC = () => {
  return (
    <div>
      <Link href="/" passHref>
        <a className="text-3xl sm:text-5xl font-bold dark:text-white">
          {data.name}
        </a>
      </Link>
      <div className="flex items-center gap-1 sm:gap-2 h-10 text-sm sm:text-2xl font-medium mt-2">
        {data.role}
      </div>
    </div>
  );
};

export default NameAndRole;
