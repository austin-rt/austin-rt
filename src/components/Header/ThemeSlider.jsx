import './Header.css';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeSlider = () => {
  return (
    <div className='header__theme-slider'>
      <i className='header__theme-slider__selector' />
      <div className='header__theme-slider__toggle'>
        <FiSun />
        <FiMoon />
      </div>
    </div>
  );
};
export default ThemeSlider;
