import { BsEnvelopeFill, BsGithub, BsLinkedin } from "react-icons/bs";
import data from "../../../data/CVData";
import Header from "../../layout/Header";
import ContactDataIconRow from "./ContactData/ContactDataIconRow";

const socialMedia = [
  {
    icon: BsEnvelopeFill,
    url: data.email,
    mail: true,
  },
  {
    icon: BsGithub,
    url: `https://github.com/${data.githubUsername}`,
  },
  {
    icon: BsLinkedin,
    url: `http://linkedin.com/in/${data.linkedinProfile}/`,
  },
];
const ContactDataContainer = () => (
  <div className="flex flex-col ">
    <Header>Contact me</Header>
    <ContactDataIconRow data={socialMedia} />
  </div>
);

export default ContactDataContainer;
