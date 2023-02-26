import Header from "../../layout/Header";
import SidebarTwoCols from "../../layout/SidebarTwoCols";

import data from "../../../data/CVData";

interface CertificatesContainerProps {
  className?: string;
}
const CertificatesContainer: React.FC<CertificatesContainerProps> = ({
  className,
}) => (
  <div className={`flex flex-col ${className}`}>
    <Header>Certificates </Header>
    {data.certificates.map((c) => (
      <SidebarTwoCols data={c} key={c.name} />
    ))}
  </div>
);

export default CertificatesContainer;
