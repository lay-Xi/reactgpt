import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Natural Language Processing',
    text: 'GPT-3 uses advanced NLP techniques to understand and interpret human language in a way that is similar to how humans process it.',
  },
  {
    title: 'Language Generation',
    text: 'GPT-3 can generate human-like language that is coherent and contextually appropriate, making it capable of writing articles, stories, and even computer code.',
  },
  {
    title: 'Few-shot Learning',
    text: 'GPT-3 has the ability to learn new tasks and concepts with very little training data, making it highly adaptable and efficient.',
  },
  {
    title: 'Multiple Languages',
    text: 'GPT-3 supports a wide range of languages, including English, Spanish, German, French, Chinese, and more, making it accessible to a global audience.',
  },
];

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>
          The future is now you just need to realize it. Step into future today
          and make it happen
        </h1>
        <p>Request early access to get started today!</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Features;
