import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const ToggleDarkMode = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const triggerSwitch = () => setDarkMode((curr) => !curr);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <button
      className={`p-1 bg-black dark:bg-white top-10 right-10 flex w-11 h-6 ${
        isDarkMode ? "justify-end" : "justify-start"
      }`}
      type="button"
      onClick={triggerSwitch}
    >
      <motion.div
        className="w-4 h-4 bg-white dark:bg-black"
        layout
        transition={spring}
      />
    </button>
  );
};

export default ToggleDarkMode;
