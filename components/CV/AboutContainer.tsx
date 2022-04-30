import Header from "../shared/Header";

import data from "../../data/CVData";

const AboutContainer = () => (
  <div className="flex flex-col">
    <Header>About me</Header>
    <div className="flex justify-center px-2">
      <p className="max-w-fit text-justify text-sm sm:text-base">
        {data.about}
      </p>
    </div>
  </div>
);

export default AboutContainer;
