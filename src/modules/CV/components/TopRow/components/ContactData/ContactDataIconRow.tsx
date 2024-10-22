import type SocialMediaType from "../../../../types/SocialMediaType";
import ContactDataIcon from "./ContactDataIconRow/ContactDataIcon";

interface ContactDataIconRowProps {
  data: SocialMediaType[];
}
const ContactDataIconRow: React.FC<ContactDataIconRowProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-2 mt-1 sm:mt-0 p-2">
      {data.map((s) => (
        <ContactDataIcon icon={s} key={s.url} />
      ))}
    </div>
  );
};

export default ContactDataIconRow;
