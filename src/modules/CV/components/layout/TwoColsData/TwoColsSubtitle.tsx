const TwoColsSubtitle: React.FC<{ text: string }> = ({ text }) => {
  return (
    <b className="font-medium text-xs sm:text-sm dark:text-gray-400">{text}</b>
  );
};

export default TwoColsSubtitle;
