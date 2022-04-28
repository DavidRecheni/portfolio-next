import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const ToggleDarkMode = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className={`p-1 top-10 right-10 flex w-11 h-6
       ${theme === "dark" ? "justify-end bg-white" : "justify-start bg-black"}`}
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <motion.div
        className={`w-4 h-4  ${theme === "dark" ? "bg-black" : "bg-white"}`}
        layout
        transition={spring}
      />
    </button>
  );
};

export default ToggleDarkMode;
