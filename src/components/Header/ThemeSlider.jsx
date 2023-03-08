import './Header.css';
import { useRef, useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { STYLES } from '../../utils/constants';

const ThemeSlider = () => {
  const slider = useRef(null);
  const [theme, setTheme] = useState('dark');

  const changeTheme = e => {
    if (e && e.type === 'keydown' && e.key !== 'Enter') return;
    switch (theme) {
      case undefined:
      case 'dark':
        setTheme('light');
        break;
      case 'light':
        setTheme('dark');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    switch (theme) {
      case 'light':
        slider.current.style.right = '-1.8rem';
        document.documentElement.style.setProperty(
          '--color-bg',
          STYLES.light.bg
        );
        document.documentElement.style.setProperty(
          '--color-bg-alt',
          STYLES.light.bgAlt
        );
        document.documentElement.style.setProperty(
          '--color-primary',
          STYLES.light.primary
        );
        document.documentElement.style.setProperty(
          '--color-primary-alt',
          STYLES.light.primaryAlt
        );
        document.documentElement.style.setProperty(
          '--color-white',
          STYLES.light.white
        );
        document.documentElement.style.setProperty(
          '--color-light',
          STYLES.light.light
        );
        document.documentElement.style.setProperty(
          '--bg-image',
          STYLES.light.bgImage
        );
        break;
      case 'dark':
        slider.current.style.right = '-3.8rem';
        document.documentElement.style.setProperty(
          '--color-bg',
          STYLES.dark.bg
        );
        document.documentElement.style.setProperty(
          '--color-bg-alt',
          STYLES.dark.bgAlt
        );
        document.documentElement.style.setProperty(
          '--color-primary',
          STYLES.dark.primary
        );
        document.documentElement.style.setProperty(
          '--color-primary-alt',
          STYLES.dark.primaryAlt
        );
        document.documentElement.style.setProperty(
          '--color-white',
          STYLES.dark.white
        );
        document.documentElement.style.setProperty(
          '--color-light',
          STYLES.dark.light
        );
        document.documentElement.style.setProperty(
          '--bg-image',
          STYLES.dark.bgImage
        );
        break;
      default:
        break;
    }
  }, [theme]);

  return (
    <div
      className='header__theme-slider'
      onClick={changeTheme}
      tabIndex={0}
      onKeyDown={e => {
        changeTheme(e);
      }}
      title='dark mode slider'
    >
      {theme === 'dark' ? (
        <i
          ref={slider}
          className='header__theme-slider__selector'
        >
          <FiMoon />
        </i>
      ) : (
        <i
          ref={slider}
          className='header__theme-slider__selector'
        >
          <FiSun />
        </i>
      )}
      <div className='header__theme-slider__toggle'>
        <FiSun />
        <FiMoon />
      </div>
    </div>
  );
};
export default ThemeSlider;
