import data from "../../../data/CVData";
import Header from "../../layout/Header";
import SidebarTwoCols from "../../layout/SidebarTwoCols";

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
