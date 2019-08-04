import React from 'react';
import lukeLogo from '../assets/images/logo.svg';

const Sidebar = props => {
  return (
    <div className="sidebar">
      <img src={lukeLogo} alt="Luke Rollans" width="120" height="120" />

      <a className="email" href="mailto:luke@rollans.sh">
        luke@rollans.sh
      </a>

      <ul className="social">
        <li className="github">
          <a href="https://github.com/lukerollans">lukerollans</a>
        </li>

        <li className="twitter">
          <a href="https://twitter.com/lukerollans">lukerollans</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
