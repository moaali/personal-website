import React from 'react';
import ReactMarkdown from 'react-markdown';
import markdown from './index.md';
import PostTemplate from './../PostTemplate';

const ReduxCheatsheet = () => (
  <PostTemplate>
    <div id='post'>
      <hgroup className='mB-60'>
        <h5 className='c-minor'>Jan 03, 2018</h5>
        <h1 className='c-blocker'>Redux Cheatsheet</h1>
        <hr />
      </hgroup>
      <ReactMarkdown source={markdown} />
    </div>
  </PostTemplate>
);

export default ReduxCheatsheet;
