interface ISidebarTwoCols {
  data: {
    name: string;
    details: string;
  };
}

const SidebarTwoCols: React.FC<ISidebarTwoCols> = ({ data }) => (
  <div className="flex justify-between items-center gap-4">
    <p className="whitespace-nowrap truncate">{data.name}</p>
    <p className="text-sm font-medium">{data.details}</p>
  </div>
);

export default SidebarTwoCols;
