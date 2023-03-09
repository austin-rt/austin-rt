import './Contact.css';
import { useRef, useContext, useState } from 'react';
import emailjs from 'emailjs-com';
import { MdOutlineEmail } from 'react-icons/md';
import { ImLinkedin } from 'react-icons/im';
import { FiPhoneCall } from 'react-icons/fi';
import { RefContext } from '../../context/RefContext';

const Contact = () => {
  const [emailSent, setEmailSent] = useState(false);
  const { contact } = useContext(RefContext);

  const form = useRef(null);
  const formFeedback = useRef(null);

  const sendEmail = e => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     'service_faf1dzf',
    //     'template_29aldcd',
    //     form.current,
    //     'c3BNf-OCrtQM_IBtB'
    //   )
    //   .then(
    //     result => {
    //       console.log(result.text);
    //     },
    //     error => {
    //       console.log(error.text);
    //     }
    //   );

    setEmailSent(true);
    // formFeedback.current.style.opacity = 1;
    // setTimeout(() => {
    // formFeedback.current.style.opacity = 0;
    // }, 10000);
    setTimeout(() => setEmailSent(false), 10000);
    e.target.reset();
  };

  return (
    <section
      id='contact'
      ref={contact}
    >
      <h5>Let's Connect</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <a
            href='mailto:austinrtaylor91@gmail.com?subject=Hi%20Austin!'
            target='_blank'
            rel='noopener noreferrer'
          >
            <article className='contact__option'>
              <MdOutlineEmail className='contact__option-icon icon' />
              <h4>Email</h4>
              <p>Drop Me A Line</p>
            </article>
          </a>

          <a
            href='https://www.linkedin.com/in/austinrt'
            target='_blank'
            rel='noopener noreferrer'
          >
            <article className='contact__option'>
              <ImLinkedin className='contact__option-icon icon' />
              <h4>LinkedIn</h4>
              <p>Send Me A Message</p>
            </article>
          </a>

          <a
            href='tel:+12292219699'
            target='_blank'
            rel='noopener noreferrer'
          >
            <article className='contact__option'>
              <FiPhoneCall className='contact__option-icon icon' />
              <h4>Phone</h4>
              <p>Ring Me</p>
            </article>
          </a>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type='text'
            name='name'
            placeholder='Your Name'
            required={true}
          />
          <input
            type='email'
            name='email'
            placeholder='Your Email'
            required={true}
          />
          <textarea
            name='message'
            rows='7'
            placeholder="What's on your mind?"
            required={true}
          />
          <button
            type='submit'
            className='btn btn-primary form__btn'
          >
            {emailSent ? 'Send Another' : 'Send'}
          </button>
        </form>
      </div>
      <div className='form-feedback-container'>
        <h5
          className={`form-feedback ${emailSent ? '' : 'hidden'}`}
          ref={formFeedback}
        >
          Thanks for reaching out! I'll get back to you as soon as I can!
        </h5>
      </div>
    </section>
  );
};

export default Contact;
