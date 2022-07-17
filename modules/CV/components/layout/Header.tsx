interface IHeader {
  children: React.ReactNode;
  className?: string;
}
const Header: React.FC<IHeader> = ({ children, className = "" }) => (
  <div className={`flex items-center cursor-default ${className}`}>
    <div className="text-xl font-semibold  whitespace-nowrap">{children}</div>
    <div className="border-2 border-black dark:border-white my-4 w-full ml-6" />
  </div>
);

export default Header;
