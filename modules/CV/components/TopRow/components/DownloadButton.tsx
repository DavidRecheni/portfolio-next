import { useTheme } from "next-themes";
import { HiDownload } from "react-icons/hi";

const DownloadButton = () => {
  const { theme } = useTheme();

  const printFile = () => {
    window.print();
  };

  return (
    <button
      onClick={printFile}
      className={`print:hidden text-3xl ${theme === "dark" ? "hidden" : ""}`}
    >
      <HiDownload />
    </button>
  );
};

export default DownloadButton;
