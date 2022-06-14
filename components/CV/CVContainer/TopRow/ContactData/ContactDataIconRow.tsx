import SocialMediaType from "../../../../types/SocialMediaType";
import ContactDataIcon from "./ContactDataIconRow/ContactDataIcon";

interface ContactDataIconRowProps {
  data: SocialMediaType[];
}
const ContactDataIconRow: React.FC<ContactDataIconRowProps> = ({ data }) => {
  return (
    <div className="flex gap-2 mt-1 sm:mt-0 p-2 print:flex-col">
      {data.map((s) => (
        <ContactDataIcon icon={s} key={s.url} />
      ))}
    </div>
  );
};

export default ContactDataIconRow;
