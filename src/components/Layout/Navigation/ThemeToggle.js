import useDarkMode from '@/hooks/utils/use-dark-mode.hook';

import { SunIcon, MoonIcon } from '@heroicons/react/solid';

const ThemeToggle = () => {
  const { isDarkMode, setThemeMode } = useDarkMode();

  return (
    <button onClick={() => setThemeMode()}>
      {isDarkMode ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
    </button>
  );
};

export default ThemeToggle;
