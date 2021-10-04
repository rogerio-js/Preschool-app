import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Switch from "react-switch";
import {motion} from 'framer-motion'

const ThemeSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const dark = theme === "dark" ? true : false;

  const [checked, setChecked] = useState(dark);
  const [mounted, setMounted] = useState(false);

  const handleChange = (nextChecked: boolean) => {
    setChecked(nextChecked);
  };

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    setTheme(checked ? "dark" : "light");
  }, [checked, setTheme]);

  if (!mounted) return null;

  return (
    <Switch
      onChange={handleChange}
      checked={checked}
      aria-label="switch between light and dark themes"
      offColor="#555"
      onColor="#000"
      onHandleColor="#eee"
      handleDiameter={20}
      className="ml-5"
      uncheckedIcon={
        <div className="flex justify-center items-center h-full">
          <motion.svg
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-yellow-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </motion.svg>
        </div>
      }
      checkedIcon={
        <div className="flex justify-center items-center h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </div>
      }
      height={24}
      width={48}
    />
  );
};

export default ThemeSwitch;
