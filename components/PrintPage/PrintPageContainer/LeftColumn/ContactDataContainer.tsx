import { BsEnvelopeFill } from "react-icons/bs";
import Header from "../../../shared/Header";
import ContactDataIconRow from "./ContactData/ContactDataIconRow";
import data from "../../../../data/CVData";

const ContactDataContainer = () => (
  <div className="flex flex-col ">
    <Header>Contact me</Header>
    <ContactDataIconRow />
  </div>
);

export default ContactDataContainer;
