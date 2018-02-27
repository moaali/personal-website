import React, { Component } from 'react';
import { Motion, spring, presets } from 'react-motion';
import classNames from 'classnames/dedupe';
import PropTypes from 'prop-types';
import './index.scss';

function getDefaultStyle() {
  return {
    top     : 50,
    opacity : 0,
  };
}

function getStyle() {
  return {
    top     : spring(0, presets.gentle),
    opacity : spring(1, presets.gentle),
  };
}

export default class Animation extends Component {
  static propTypes = {
    children  : PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    className : PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.renderItems = this.renderItems.bind(this);
  }

  renderItems(interpolatedStyle) {
    const { className, children, ...props } = this.props;
    const classes = classNames('Animation', className);

    return (
      <div
        className={classes}
        style={{
          transform: `translate3d(0, ${interpolatedStyle.top}px, 0)`,
          opacity: interpolatedStyle.opacity,
        }}
        {...props}
      >
        {this.props.children}
      </div>
    );
  }

  render() {
    return (
      <Motion
        defaultStyle={getDefaultStyle()}
        style={getStyle()}
      >
        {this.renderItems}
      </Motion>
    );
  }
}
