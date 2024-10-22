interface ITitleAndInstitution {
  title: string;
  institution: { name: string; link: string };
}
const TwoColsTitleAndInstitution: React.FC<ITitleAndInstitution> = ({
  title,
  institution,
}) => {
  return (
    <div className="flex items-center gap-1">
      <p className="sm:text-lg font-semibold whitespace-nowrap">{title}</p>
      <a
        href={institution.link}
        className="hover:text-blue-600 font-medium truncate text-xs sm:text-sm"
        target="_blank"
        rel="noreferrer"
      >
        @{institution.name}
      </a>
    </div>
  );
};

export default TwoColsTitleAndInstitution;
