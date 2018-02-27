import React from 'react';
import { Helmet } from 'react-helmet';
import { Animation } from '../../components';

const NotFound = () => (
  <Animation>
    <div>
      <Helmet>
        <title>404</title>
      </Helmet>
    </div>
  </Animation>
);

export default NotFound;
