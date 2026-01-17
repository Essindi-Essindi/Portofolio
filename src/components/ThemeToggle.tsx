import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-lg border border-border bg-card/80 backdrop-blur-sm flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all duration-300"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {theme === "dark" ? (
          <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
        ) : (
          <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
        )}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
