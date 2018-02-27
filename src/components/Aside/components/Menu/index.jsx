import React from 'react';
import links from 'shared/scripts/config';
import './index.scss';

const Footer = () => (
  <nav id='socialLinks' className='layers'>
    <a target='_blank' rel='noopener noreferrer' href={links.github} className='td-n fsz-xl lh-1 p-10 c-blocker cH-primary' >
      <i className='la la-github' />
    </a>
    <a target='_blank' rel='noopener noreferrer' href={links.linkedin} className='td-n fsz-xl lh-1 p-10 c-blocker cH-primary' >
      <i className='la la-linkedin' />
    </a>
    <a rel='noopener noreferrer' href={links.skype} className='td-n fsz-xl lh-1 p-10 c-blocker cH-primary' >
      <i className='la la-skype' />
    </a>
  </nav>
);

export default Footer;
