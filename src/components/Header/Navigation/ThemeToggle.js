import useDarkMode from '@/hooks/utils/useDarkMode';

import { SunIcon, MoonIcon } from '@heroicons/react/solid';

const ThemeToggle = () => {
  const { isDarkMode, setThemeMode } = useDarkMode();

  return (
    <div
      className="p-2 rounded-full transition duration-200 ease-in-out cursor-pointer text-gray-800 dark:text-white hover:text-yellow-500 dark:hover:text-yellow-500 "
      onClick={() => setThemeMode()}
    >
      {isDarkMode ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
    </div>
  );
};

export default ThemeToggle;
