import SocialMediaType from "../../../../../types/SocialMediaType";

const ContactDataIcon: React.FC<{
  icon: SocialMediaType;
}>=({ icon }) => {
  return (
    <a
      className="hover:text-blue-600"
      href={icon.mail? `mailto:${icon.url}`:icon.url}
      target="_blank"
      rel="noreferrer"
    >
      <div className="font-medium flex items-center gap-2 text-xl">
        {icon?.icon({})}
        <span className="text-sm print:block">{icon.url}</span>
      </div>
    </a>
  );
};

export default ContactDataIcon;
