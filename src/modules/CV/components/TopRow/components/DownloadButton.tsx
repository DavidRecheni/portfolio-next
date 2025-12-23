import { HiDownload } from "react-icons/hi";

const DownloadButton = () => {
  const printFile = () => {
    window.print();
  };

  return (
    <button onClick={printFile} className="print:hidden text-3xl">
      <HiDownload />
    </button>
  );
};

export default DownloadButton;
