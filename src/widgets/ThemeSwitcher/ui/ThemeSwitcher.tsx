import { memo } from 'react';
import { useTheme, Theme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import ThemeDarkIcon from 'shared/assets/icons/theme-dark.svg';
import ThemeLightIcon from 'shared/assets/icons/theme-light.svg';
import { Button, ButtonTheme } from '../../../shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <ThemeDarkIcon /> : <ThemeLightIcon />}
    </Button>
  );
});
