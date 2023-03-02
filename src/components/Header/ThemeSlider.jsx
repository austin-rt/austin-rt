import './Header.css';
import { useRef, useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { STYLES } from '../../utils/constants';

const ThemeSlider = () => {
  const slider = useRef(null);
  const [theme, setTheme] = useState('light');

  const changeTheme = e => {
    if (e && e.type === 'keydown' && e.key !== 'Enter')
      return;
    switch (theme) {
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
      case 'dark':
        slider.current.style.right = '-3.8rem';
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
        document.body.style.backgroundImage =
          'url(../src/assets/bg-texture-2.png)';
        break;
      case 'light':
        slider.current.style.right = '-1.8rem';
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
        document.body.style.backgroundImage = '';
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
      <i
        className='header__theme-slider__selector'
        ref={slider}
      />
      <div className='header__theme-slider__toggle'>
        <FiSun />
        <FiMoon />
      </div>
    </div>
  );
};
export default ThemeSlider;
