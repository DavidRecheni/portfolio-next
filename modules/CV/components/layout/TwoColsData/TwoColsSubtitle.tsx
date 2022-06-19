const TwoColsSubtitle: React.FC<{ text: string }> = ({ text }) => {
  return (
    <p className="font-medium text-xs sm:text-sm text-gray-800 dark:text-gray-400">
      {text}
    </p>
  );
};

export default TwoColsSubtitle;
