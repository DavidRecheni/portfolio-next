interface IProps {
  children: string;
}
const Tag=({ children }: IProps) => {
  return (
    <p className="px-2 py-1 bg-cyan-600 rounded-md">{children}</p>
  )
}

export default Tag