import React from 'react';
import logoImg from 'shared/static/images/logo.png';
import { Link } from 'react-router-dom';

const Logo = () => (
  <section className='cornerSquare bdB'>
    <Link to='/' className='w-100p ta-c h-100p d-f ai-c jc-c '>
      <img src={logoImg} alt='Mo Ali' />
    </Link>
  </section>
);

export default Logo;
