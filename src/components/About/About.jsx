import './About.css';
import { useContext } from 'react';
import { RefContext } from '../../context/RefContext';
import aboutMe from '../../assets/about-me.png';

export default function About() {
  const { about, contact, scrollTo } = useContext(RefContext);
  return (
    <section
      id='about'
      ref={about}
    >
      <h5>Get To Know Me</h5>
      <h2>A Little About Me</h2>

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
          <p>
            From the lens of a camera to the lines of code, I've always been
            driven by my passion for understanding what makes things tick. My
            hands and mind work together, whether I'm tinkering with vintage
            bikes or developing my own film photography. This curiosity and a
            desire to connect led me to bridge gaps in the film industry and now
            in the tech world.
          </p>
          <p>
            As a design-focused software engineer, I bring my technical skills,
            artistic eye, and creative problem-solving to the table in equal
            measure. My constant drive to evolve and my passion for mentoring
            others make me a valuable asset to any team.
          </p>
          <p>
            After a successful tenure in the film industry, I am further
            cultivating my curiosity and creative spirit by crafting code and
            connecting communities.
          </p>
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
}
