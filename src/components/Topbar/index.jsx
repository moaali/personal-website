import React from 'react';
import { PubSub } from 'pubsub-js';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withRouter }  from 'react-router-dom';
import HiImg from 'shared/static/images/hi.gif';
import './index.scss';

function handleTitle(path) {
  switch(path) {
    case '/':
      return <img className='w-6u' src={HiImg} alt='HI' />;
    case '/work':
      return 'Work';
    case '/404':
      return '404';
    default:
      return 'Blog';
  }
}

function handleClick(e) {
  if (e.target.getAttribute('id') === 'sidebar-toggle') {
    PubSub.publish('Sidebar');
  } else {
    PubSub.publish('Aside');
  }
}

const Topbar = ({ location }) => {
  const titleContent = handleTitle(location.pathname);

  return (
    <section className='cornerSquare bdB'>
      <div className='w-100p peers fxw-nw ai-c jc-c pX-40'>
        <div className='peer d-n@md+'>
          <i
            id='sidebar-toggle'
            className='la la-bars cur-p d-b p-10 cH-primary toggle-btn'
            onClick={handleClick}
            role='presentation'
          />
        </div>
        <div className='peer fxg-1 ta-c'>
          <h1 id='topbarTitle' className={classNames({'isString': typeof titleContent === 'string' })}>
            <span>{ titleContent }</span>
          </h1>
        </div>
        <div className='peer d-n@xl+'>
          <i
            id='aside-toggle'
            className='la la-bars cur-p d-b p-10 cH-primary toggle-btn'
            onClick={handleClick}
            role='presentation'
          />
        </div>
      </div>
    </section>
  );
};

Topbar.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(Topbar);
