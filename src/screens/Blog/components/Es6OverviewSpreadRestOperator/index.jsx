import React from 'react';
import ReactMarkdown from 'react-markdown';
import PostTemplate from './../PostTemplate';
import markdown from './index.md';

const Es6OverviewSpreadRestOperator = () => (
  <PostTemplate>
    <div id='post'>
      <hgroup className='mB-60'>
        <h5 className='c-minor'>Jul 16, 2017</h5>
        <h1 className='c-blocker'>ES6 Overview - Spread / Rest Operator</h1>
        <hr />
      </hgroup>
      <ReactMarkdown source={markdown} />
    </div>
  </PostTemplate>
);

export default Es6OverviewSpreadRestOperator;
