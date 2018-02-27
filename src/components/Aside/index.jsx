import React, { Component } from 'react';
import classNames from 'classnames';
import { PubSub } from 'pubsub-js';
import { Footer, CV, Menu } from './components';
import './index.scss';

class Aside extends Component {
  state = {
    isAsideShown: false,
  }

  componentDidMount() {
    PubSub.subscribe('Aside', () => {
      this.setState({
        isAsideShown: !this.state.isAsideShown,
      }, () => {
        PubSub.publish('Layout', { isAsideShown: this.state.isAsideShown });
      })
    });
  }

  render() {
    return (
      <aside
        id='aside'
        className={classNames('layers h-100p pos-s bdL', {'is-shown': this.state.isAsideShown})}
      >
        <CV />
        <div className='fxg-1 d-f ai-c'>
          <div className='m-a'>
            <Menu />
          </div>
        </div>
        <Footer />
      </aside>

    );
  }
}

export default Aside;
