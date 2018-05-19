import React, { Component } from 'react';
import { Header } from './components';

import { CouponList } from './components';
import { CouponInsert } from './components';

class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            
            <CouponInsert/>
            <CouponList/>
        </div>    
    );
  }
}

export default App;