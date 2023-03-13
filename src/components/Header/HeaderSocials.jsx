import { BsGithub, BsLinkedin, BsTwitter, BsMedium } from 'react-icons/bs';
import { DiNpm } from 'react-icons/di';
import { FaDev } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a
        href='https://www.github.com/austin-rt'
        title='GitHub Profile'
        target='_blank'
        className='icon'
        rel='noopener noreferrer'
      >
        <BsGithub />
      </a>
      <a
        href='https://www.linkedin.com/in/austinrt'
        title='LinkedIn Profile'
        target='_blank'
        className='icon'
        rel='noopener noreferrer'
      >
        <BsLinkedin />
      </a>
      <a
        href='https://www.twitter.com/0xStink'
        title='Twitter Profile'
        target='_blank'
        className='icon'
        rel='noopener noreferrer'
      >
        <BsTwitter />
      </a>
      <a
        href='https://austinrt.medium.com/'
        title='Medium Profile'
        target='_blank'
        className='icon'
        rel='noopener noreferrer'
      >
        <BsMedium />
      </a>
      <a
        href='https://dev.to/austinrt'
        title='Dev.to Profile'
        target='_blank'
        className='icon'
        rel='noopener noreferrer'
      >
        <FaDev />
      </a>
      <a
        href='https://www.npmjs.com/~austinrt'
        title='npm Profile'
        target='_blank'
        className='icon'
        rel='noopener noreferrer'
      >
        <DiNpm />
      </a>
    </div>
  );
};

export default HeaderSocials;
