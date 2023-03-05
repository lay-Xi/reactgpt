import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature
          title='What is GPT-3'
          text='GPT-3 (Generative Pre-trained Transformer 3) is a state-of-the-art language processing artificial intelligence model developed by OpenAI. It is a large-scale neural network model that uses deep learning techniques to generate natural language text that closely resembles human writing.'
        />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature
          title='Chat Bots'
          text='A chatbot is an AI program that simulates human-like conversations to assist users in various tasks.'
        />
        <Feature
          title='Knowledge Base'
          text='A knowledge base is a centralized database that serves as a repository of information for an organization or community to support decision-making, problem-solving, and learning.'
        />
        <Feature
          title='Education'
          text='Education is the process of acquiring knowledge and skills that enable individuals to develop and succeed in their personal and professional lives, which is essential for personal growth, social and economic mobility, and the advancement of society.'
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
