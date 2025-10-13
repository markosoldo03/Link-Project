import { useTheme } from "../context/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-3 py-2 rounded-lg 
                 border border-gray-200 dark:border-white/10 
                 bg-white/70 dark:bg-[#1a1d24] backdrop-blur-md
                 text-gray-700 dark:text-gray-200 
                 shadow-sm hover:shadow-md 
                 transition-all duration-300"
    >
      {isDark ? (
        <>
          <MoonIcon className="h-4 w-4 text-cyan-400" />
          <span className="text-sm font-medium">Dark</span>
        </>
      ) : (
        <>
          <SunIcon className="h-4 w-4 text-amber-400" />
          <span className="text-sm font-medium">Light</span>
        </>
      )}
    </button>
  );
}
