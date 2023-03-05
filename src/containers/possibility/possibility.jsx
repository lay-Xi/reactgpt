import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt='possibility' />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request early access to get started</h4>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        <p>
          GPT, or Generative Pre-trained Transformer, has a wide range of
          possibilities in conversational AI applications. With its advanced
          natural language processing and language generation capabilities, GPT
          can be used to create chat bots, virtual assistants, and other
          conversational agents that can simulate human-like conversations with
          users. It can be applied to various domains, such as customer service,
          education, healthcare, and more, to provide personalized and efficient
          services. GPT's ability to learn from few examples and generate
          language in multiple languages makes it highly adaptable and
          accessible to a global audience. As technology continues to advance,
          GPT is expected to play a significant role in shaping the future of
          conversational AI.
        </p>
        <h4>Request early access to get started</h4>
      </div>
    </div>
  );
};

export default Possibility;
