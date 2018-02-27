import React from 'react';
import md5 from 'js-md5';
import { Link } from 'react-router-dom';
import posts from '../../shared/scripts/posts';
import './index.scss';

const LinksList = posts.map(post => {
  const { date, title, tags, link } = post;

  return (
    <div className='post-link peers jc-sb w-100p pY-20 bdB fxd-c@md-' key={md5(title)}>
      <div>
        <span className='d-ib w-8u fsz-sm c-major w-100p@md-'>{date}</span>
        <span className='fsz-md fw-600'>
          <Link to={link} className='td-n c-blocker cH-primary tran-all'>{title}</Link>
        </span>
      </div>
      <span className='fsz-sm c-major'>{tags}</span>
    </div>
  );
});

const Links = () => (
  <div className='layers w-100p'>
    <div className='ta-c'>
      <p className='d-ib fs-i tt-c fw-600 h6 pB-30 bdB mB-60'>This is where I post about my notes & cheetsheets.</p>
    </div>
    { LinksList }
  </div>
);

export default Links;
