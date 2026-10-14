import './About.css';
import { useContext } from 'react';
import { RefContext } from '../../context/RefContext';
import aboutMe from '../../assets/about-me.png';
import { about as copy } from '../../data/profile';

const About = () => {
  const { about, contact, scrollTo } = useContext(RefContext);
  return (
    <section
      id='about'
      ref={about}
    >
      <h5>{copy.kicker}</h5>
      <h2>{copy.title}</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-pfp-container'>
            <div className='about__me-pfp'>
              <img
                src={aboutMe}
                alt='austin taylor'
              />
            </div>
          </div>
        </div>

        <div className='about__content'>
          {copy.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className='about__contact-btn-container'>
        <div
          onClick={() => {
            scrollTo(contact);
          }}
          className='btn btn-primary about__contact-btn'
        >
          Say Hi
        </div>
      </div>
    </section>
  );
};

export default About;
