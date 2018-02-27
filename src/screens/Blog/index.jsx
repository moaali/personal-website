import React from 'react';
import { Helmet } from 'react-helmet';
import { withRouter, Switch, Route } from 'react-router-dom';
import { asyncComponent } from 'react-async-component';
import md5 from 'js-md5';
import { Links } from './components';
import { Animation } from '../../components';
import posts from './shared/scripts/posts';
import './shared/styles/index.scss';

const LoadingComponent = () => <div>Loading ...</div>;
const ErrorComponent = () => <div>Err ...</div>;

const Routes = posts.map(post => {
  const { link, component } = post;

  const AsyncPost = asyncComponent({
    resolve: () => import(`./components/${component}`),
    LoadingComponent,
    ErrorComponent,
  });

  return <Route path={link} component={AsyncPost} key={md5(component)} />;
});

const Blog = () => (
  <Animation>
    <div id='blog'>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <div id='blog' className='ffm-serif pY-80 pX-80@md+ pX-30@md-'>
        <Switch>
          <Route exact path='/blog' component={Links} />
          {Routes}
        </Switch>
      </div>
    </div>
  </Animation>
);

export default withRouter(Blog);
