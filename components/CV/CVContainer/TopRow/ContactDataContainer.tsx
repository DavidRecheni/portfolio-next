import { BsEnvelopeFill } from "react-icons/bs";
import Header from "../../../shared/Header";
import ContactDataIconRow from "./ContactData/ContactDataIconRow";
import data from "../../../../data/CVData";

const ContactDataContainer = () => (
  <div className="flex flex-col ">
    <Header>Contact me</Header>
    <div className="hidden print:flex items-center justify-center gap-2 text-lg">
      <BsEnvelopeFill />
      {data.email}
    </div>
    <ContactDataIconRow className="print:hidden" />
  </div>
);

export default ContactDataContainer;
