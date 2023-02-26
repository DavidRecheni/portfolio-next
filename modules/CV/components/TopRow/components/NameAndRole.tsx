import data from "../../../data/CVData";

const NameAndRole: React.FC=() => {
  return (
    <div className="print:flex items-center gap-4">
      <div className="text-3xl sm:text-5xl font-bold dark:text-white">
        David Recheni
      </div>
      <div className="flex items-center gap-1 sm:gap-2 h-10 text-sm sm:text-3xl mt-2">
        Full-stack Typescript + Web3 developer
      </div>
    </div>
  );
};

export default NameAndRole;
