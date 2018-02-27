import React from 'react';
import classNames from 'classnames/dedupe';
import PropTypes from 'prop-types';
import Routes from 'shared/scripts/routes';

const Content = ({ className, ...restProps }) => (
  <section className={classNames('', className)} {...restProps}>
    <Routes />
  </section>
);

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
