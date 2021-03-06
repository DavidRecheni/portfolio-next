import SidebarTwoCols from "../../layout/SidebarTwoCols";
import data from "../../../data/CVData";
import Header from "../../layout/Header";

interface LanguagesContainerProps {
  className?: string;
}
const LanguagesContainer: React.FC<LanguagesContainerProps> = ({
  className,
}) => (
  <div className={`flex flex-col ${className}`}>
    <Header>Languages</Header>
    {data.languages.map((l) => (
      <SidebarTwoCols data={l} key={l.name} />
    ))}
  </div>
);

export default LanguagesContainer;
