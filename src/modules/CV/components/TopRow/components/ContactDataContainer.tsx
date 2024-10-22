import { BsEnvelopeFill, BsGithub, BsLinkedin } from "react-icons/bs";

import Header from "../../layout/Header";
import ContactDataIconRow from "./ContactData/ContactDataIconRow";

const socialMedia = [
  {
    icon: BsEnvelopeFill,
    url: "davidrecheni@gmail.com",
    mail: true,
  },
  {
    icon: BsGithub,
    url: `https://github.com/DavidRecheni`,
  },
  {
    icon: BsLinkedin,
    url: `https://www.linkedin.com/in/david-recheni/`,
  },
];
const ContactDataContainer = () => (
  <div className="flex flex-col ">
    <Header>Contact me</Header>
    <ContactDataIconRow data={socialMedia} />
  </div>
);

export default ContactDataContainer;
