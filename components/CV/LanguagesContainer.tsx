import SidebarTwoCols from "./SidebarTwoCols";
import data from "../../data/CVData";
import Header from "../shared/Header";

const LanguagesContainer = () => (
  <>
    <Header>Languages</Header>
    {data.languages.map((l) => (
      <SidebarTwoCols data={l} key={l.name} />
    ))}
  </>
);

export default LanguagesContainer;
