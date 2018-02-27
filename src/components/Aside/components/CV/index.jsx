import React from 'react';
import links from 'shared/scripts/config';

const CV = () => (
  <section className='cornerSquare bdB'>
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={links.cv}
      className='d-f ai-c jc-c w-100p h-100p ta-c td-n c-blocker cH-primary bgcH-vague'
    >
      <span>
        <i className='la la-file-pdf-o fsz-xl' />
        <span className='d-b fsz-xs fw-600 mT-5'>RESUME</span>
      </span>
    </a>
  </section>
);

export default CV;
