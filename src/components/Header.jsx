import React from 'react'

import { BsGithub, BsLinkedin, BsTwitter, } from 'react-icons/bs';

export default function HeaderSocials() {
  return (
    <div className='header__socials'>
      <a href="https://github.com/jengriffin" title="GitHub Link" target="_blank" className='icon' rel='noopener noreferrer'><BsGithub /></a>
      <a href="https://www.linkedin.com/in/jennifer-griffin12/" title="LinkedIn Link" target="_blank" className='icon' rel='noopener noreferrer' ><BsLinkedin /></a>
    </div>
  );
}