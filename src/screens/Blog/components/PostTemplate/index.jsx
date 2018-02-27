import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animation } from 'components';
import hljs from 'highlight.js';

class PostTemplate extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
  }

  componentDidMount() {
    const blogNode = document.getElementById('blog');
    const codeNodes = blogNode.getElementsByTagName('pre');

    hljs.configure({
      languages: ['javascript'],
    })

    Array.from(codeNodes).forEach(node => {
      hljs.highlightBlock(node);
    });
  }

  render() {
    return (
      <Animation>
        <div>
          { this.props.children }
        </div>
      </Animation>
    );
  }
}

export default PostTemplate;
