import './Contact.css';
import { useRef, useContext, useState } from 'react';
import emailjs from 'emailjs-com';
import { MdOutlineEmail } from 'react-icons/md';
import { ImLinkedin } from 'react-icons/im';
import { FiPhoneCall } from 'react-icons/fi';
import { RefContext } from '../../context/RefContext';
import { contactOptions, sections } from '../../data/profile';

const CONTACT_ICONS = {
  email: MdOutlineEmail,
  linkedin: ImLinkedin,
  phone: FiPhoneCall,
};

const Contact = () => {
  const [emailSent, setEmailSent] = useState(false);
  const { contact } = useContext(RefContext);

  const form = useRef(null);
  const formFeedback = useRef(null);

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_faf1dzf',
        'template_29aldcd',
        form.current,
        'c3BNf-OCrtQM_IBtB'
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );

    setEmailSent(true);
    setTimeout(() => setEmailSent(false), 10000);
    e.target.reset();
  };

  return (
    <section
      id='contact'
      ref={contact}
    >
      <h5>{sections.contact.kicker}</h5>
      <h2>{sections.contact.title}</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          {contactOptions.map(({ type, title, cta, href }) => {
            const Icon = CONTACT_ICONS[type];
            return (
              <a
                key={type}
                href={href}
                target='_blank'
                rel='noopener noreferrer'
              >
                <article className='contact__option'>
                  <Icon className='contact__option-icon icon' />
                  <h4>{title}</h4>
                  <p>{cta}</p>
                </article>
              </a>
            );
          })}
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
