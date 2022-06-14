import Header from "../../../shared/Header";
import SidebarTwoCols from "../../../shared/SidebarTwoCols";

import data from "../../../../data/CVData";

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
