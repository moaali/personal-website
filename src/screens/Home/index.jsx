import React from 'react';
import { Helmet } from 'react-helmet';
import { Animation } from '../../components';

const Home = () => (
  <Animation>
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className='ffm-serif pY-80 pX-80@md+ pX-30@md-'>
        <h5 className='fw-600 c-critical'>My Name is Mohamed Ali</h5>
        <h3 className='fw-600 c-blocker'>Front-end Engineer / React App Developer</h3>
        <div className='c-pivotal mT-30'>
          <p className='mB-30'>Everything started with curiosity about web technologies (HTML, CSS). Back in 2011, I started learning about HTML and CSS and how to build simple web pages using them. </p>
          <p className='mB-30'>In 2012, I decided to give it a try and get deeper, I started to learn JavaScript and in a matter of days I’ve  fallen in love with the software engineering world in general and JavaScript specifically. Year Later, I started my professional career designing website template using Photoshop, convert them into functional websites and sell them on Envato marketplace, besides doing freelancing jobs for local agencies.</p>
          <p className='mB-30'>2015, This is the year when I decided to shift my career from Petroleum Engineering to Software Engineering. I took the route of developing web applications using MVC frameworkers, I chose to give Angular a try. I worked with it for almost a year, then I switched to React, admired it for it’s simplicity and since then I’m using it on a daily basis in my personal/professional projects. And that’s my little story with web development.</p>
        </div>
      </div>
    </div>
  </Animation>
);

export default Home;
