import { useTheme } from "../hooks/useTheme"

const ThemeToggle = () => {

    const {theme, setTheme, toggleTheme} = useTheme()

  return (
    <>
        <button className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors" onClick={() => toggleTheme()}>{theme === "dark" ? "☀️ Light" : "🌙 Dark"}</button>
    </>
  )
}

export default ThemeToggle