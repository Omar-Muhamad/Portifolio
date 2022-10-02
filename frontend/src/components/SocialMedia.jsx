import React from 'react';
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a href='https://twitter.com/Eng_OmarMuhamad' target="_blank" rel="noreferrer">
        <BsTwitter />
      </a>
      <a href='https://github.com/Omar-Muhamad' target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href='https://www.linkedin.com/in/eng-omarmuhammad/' target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
    </div>
  )
};

export default SocialMedia;