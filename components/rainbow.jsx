import React from 'react';
import {
  Route,
  Link,
  NavLink
} from 'react-router-dom';

import Red from './red';
import Green from './green';
import Blue from './blue';
import Violet from './violet';

class Rainbow extends React.Component {
  render() {
    return (
      <div className='main'>
        <h1>Rainbow Router!</h1>

        <nav>
          <NavLink className="nav" to='/red' >Red</NavLink>
          <NavLink className="nav" to='/green' >Green</NavLink>
          <NavLink className="nav" to='/blue' >Blue</NavLink>
          <NavLink className="nav" to='/violet' >Violet</NavLink>
        </nav>
        <div id="rainbow">
          <Route path="/red" component={Red} />
          <Route path="/green" component={Green} />
          <Route path="/blue" component={Blue} />
          <Route path="/violet" component={Violet} />
        </div>
      </div>
    );
  }
};

export default Rainbow;
