import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './Home';

const Main = () => (
  <HashRouter>
    <div>
      <h1>React Basic Template</h1>
      <ul className="header">
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
      </ul>
      <div className="content">
        <Route exact path="/" component={Home} />
      </div>
    </div>
  </HashRouter>
);

export default Main;
