import React from 'react';
import links from 'shared/scripts/config';

const Footer = () => (
  <section className='cornerSquare bdT'>
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={links.fork}
      className='d-f ai-c jc-c w-100p h-100p ta-c td-n c-blocker fsz-xl cH-primary bgcH-vague'
    >
      <i className='la la-git' />
    </a>
  </section>
);

export default Footer;
