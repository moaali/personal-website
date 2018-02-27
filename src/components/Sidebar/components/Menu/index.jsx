import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/dedupe';
import PropTypes from 'prop-types';
import './index.scss';


const Menu = ({ className, ...restProps }) => (
  <nav id='sidebarMenu' className={classNames('layers ai-fs tt-u fsz-xs fw-600 c-blocker', className)} {...restProps}>
    <NavLink exact to='/' activeClassName='active c-primary'>home</NavLink>
    <NavLink to='/work' activeClassName='active c-primary'>work</NavLink>
    <NavLink to='/blog' activeClassName='active c-primary'>blog</NavLink>
  </nav>
);

Menu.propTypes = {
  className: PropTypes.string,
};

export default Menu;
