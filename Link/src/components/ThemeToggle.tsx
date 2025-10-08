import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex justify-center p-10 max-w-screen w-full">
    <button
      onClick={toggleTheme}
      className="flex absolute top-20 mt-5 mb-5 right-4 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white shadow transition-all"
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
    </div>
  );
}
