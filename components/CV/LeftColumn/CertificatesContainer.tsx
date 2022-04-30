import Header from "../../shared/Header";
import SidebarTwoCols from "../../shared/SidebarTwoCols";

import data from "../../../data/CVData";

const CertificatesContainer = () => (
  <>
    <Header>Certificates </Header>
    {data.certificates.map((c) => (
      <SidebarTwoCols data={c} key={c.name} />
    ))}
  </>
);

export default CertificatesContainer;
