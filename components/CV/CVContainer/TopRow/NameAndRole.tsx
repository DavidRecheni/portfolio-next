import React from "react";

import data from "../../../data/CVData";

const NameAndRole: React.FC = () => {
  return (
    <div>
      <div className="text-3xl sm:text-5xl font-bold dark:text-white">
        {data.name}
      </div>
      <div className="text-sm sm:text-xl mt-2">
        <div className="flex items-center gap-1 sm:gap-2 h-10">{data.role}</div>
      </div>
    </div>
  );
};

export default NameAndRole;
