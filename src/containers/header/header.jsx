import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
          Let's Build Something Amazing with GPT-3 OpenAI
        </h1>
        <p>
          GPT-3 is considered a breakthrough in natural language processing due
          to its high level of accuracy and the fact that it can generate highly
          coherent and natural-sounding language that is difficult to
          distinguish from human writing. It has numerous applications,
          including chatbots, automated content creation, and language
          translation, among others.
        </p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Enter your email' />
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3_header-content__people'>
          <img src={people} alt='people' />
          <p>1,600 people requested access in last 24 hours</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt='ai' />
      </div>
    </div>
  );
};

export default Header;
