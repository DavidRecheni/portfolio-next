const TwoColsDataDescription: React.FC<{ description: string }> = ({
  description,
}) => {
  return (
    <>
      {description.split(/(?=•)/g).map((d) => (
        <p className="text-xs sm:text-sm" key={d}>
          {d}
        </p>
      ))}
    </>
  );
};

export default TwoColsDataDescription;
