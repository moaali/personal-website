import React from 'react';
import ReactMarkdown from 'react-markdown';
import markdown from './index.md';
import PostTemplate from './../PostTemplate';

const Es6OverviewTemplateLiterals = () => (
  <PostTemplate>
    <div id='post'>
      <hgroup className='mB-60'>
        <h5 className='c-minor'>Jul 08, 2017</h5>
        <h1 className='c-blocker'>ES6 Overview - Template Literals</h1>
        <hr />
      </hgroup>
      <ReactMarkdown source={markdown} />
    </div>
  </PostTemplate>
);

export default Es6OverviewTemplateLiterals;
