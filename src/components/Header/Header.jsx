import './Header.css';
import { useContext } from 'react';
import { RefContext } from '../../context/RefContext';
import CallToAction from './CallToAction';
import HeaderSocials from './HeaderSocials';
import { hero } from '../../data/profile';
import ThemeSlider from './ThemeSlider';

const Header = () => {
  const { home, projects, contact, scrollTo } = useContext(RefContext);
  return (
    <header ref={home}>
      <div className='container header__container'>
        <ThemeSlider />
        <h5 className='text-light'>{hero.greeting}</h5>
        <h1 className='header__name'>{hero.name}</h1>
        <h5 className='text-light'>{hero.role}</h5>
        <CallToAction
          contact={contact}
          scrollTo={scrollTo}
        />
        <HeaderSocials />
        <div className='pfp-container'>
          <img
            src={hero.image}
            className='pfp'
            alt='austin taylor'
          />
        </div>
        <div className='scroll__down__container'>
          <div className='scroll__down__portfolio scroll__down'>
            <h3
              onClick={() => {
                scrollTo(projects);
              }}
            >
              Projects
            </h3>
          </div>
          <div
            className='scroll__down scroll__down__arrows'
            title='scroll down arrows'
          >
            <span
              onClick={() => {
                scrollTo(projects);
              }}
            >{`>`}</span>
            <span
              onClick={() => {
                scrollTo(projects);
              }}
            >{`>`}</span>
            <span
              onClick={() => {
                scrollTo(projects);
              }}
            >{`>`}</span>
            <span
              onClick={() => {
                scrollTo(projects);
              }}
            >{`>`}</span>
            <span
              onClick={() => {
                scrollTo(projects);
              }}
            >{`>`}</span>
            <span
              onClick={() => {
                scrollTo(projects);
              }}
            >{`>`}</span>
            <span
              onClick={() => {
                scrollTo(projects);
              }}
            >{`>`}</span>
            <span
              onClick={() => {
                scrollTo(projects);
              }}
            >{`>`}</span>
            <span
              onClick={() => {
                scrollTo(projects);
              }}
            >{`>`}</span>
            <span
              onClick={() => {
                scrollTo(projects);
              }}
            >{`>`}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
