import React, { Component } from 'react';
import { PubSub } from 'pubsub-js';
import Aside from '../Aside';
import Content from '../Content';
import Footer from '../Footer';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';

class Layout extends Component {
  state = {
    isSidebarShown: false,
    isAsideShown: false,
  }

  componentDidMount() {
    PubSub.subscribe('Layout', (msg, { isSidebarShown, isAsideShown }) => {
      this.setState({
        isSidebarShown: isSidebarShown || false,
        isAsideShown: isAsideShown || false,
      });
    });

    window.addEventListener('click', e => {
      if (!document.getElementById('sidebar').contains(e.target) && this.state.isSidebarShown){
        PubSub.publish('Sidebar');
      }

      if (!document.getElementById('aside').contains(e.target) && this.state.isAsideShown){
        PubSub.publish('Aside');
      }
    });
  }

  render() {
    return (
      <section className='peers fxw-nw'>
        <div className='peer h-100vh pos-st t-0 z-2'>
          <Sidebar />
        </div>
        <div className='peer peer-greed ov-h pos-r z-1'>
          <div className="layers mnh-100vh">
            <Topbar />
            <Content className='fxg-1 w-100p' />
            <Footer />
          </div>
        </div>
        <div className='peer h-100vh pos-st t-0 z-2'>
          <Aside />
        </div>
      </section>
    );
  }
}

export default Layout;
