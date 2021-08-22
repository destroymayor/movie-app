import { useEffect } from 'react';

import { useRecoilState } from 'recoil';
import { themeState } from 'src/context/common/theme';

const themeTypes = {
  light: 'light',
  dark: 'dark',
};

const useDarkMode = () => {
  const [theme, setThemeState] = useRecoilState(themeState);

  const isDarkMode = theme === themeTypes.dark;
  const colorTheme = theme === themeTypes.dark ? themeTypes.light : themeTypes.dark;

  const setThemeMode = () => {
    setThemeState(colorTheme);
    localStorage.setItem('theme', colorTheme);
  };

  // set default theme by localStorage
  useEffect(() => {
    const getThemeLocalStorage = localStorage?.getItem('theme');
    setThemeState(getThemeLocalStorage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme, colorTheme]);

  return { isDarkMode, setThemeMode };
};

export default useDarkMode;
