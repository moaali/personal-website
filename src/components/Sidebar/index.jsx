import React, { Component } from 'react';
import classNames from 'classnames';
import { PubSub } from 'pubsub-js';
import { Footer, Logo, Menu } from './components';
import './index.scss';

class Sidebar extends Component {
  state = {
    isSidebarShown: false,
  }

  componentDidMount() {
    PubSub.subscribe('Sidebar', () => {
      this.setState({
        isSidebarShown: !this.state.isSidebarShown,
      }, () => {
        PubSub.publish('Layout', { isSidebarShown: this.state.isSidebarShown });
      })
    });
  }

  render() {
    return (
      <section id='sidebar' className={classNames('layers h-100p bdR', {'is-shown': this.state.isSidebarShown})}>
        <Logo />
        <div className='fxg-1 d-f ai-c'>
          <div className='m-a'>
            <Menu />
          </div>
        </div>
        <Footer />
      </section>
    );
  }
}

export default Sidebar;
