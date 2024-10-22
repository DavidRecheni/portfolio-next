interface IProps {
  children: string;
}
const Tag = ({ children }: IProps) => {
  return (
    <p className="px-2 py-1 bg-gray-400 text-gray-900 rounded-md">{children}</p>
  );
};

export default Tag;
