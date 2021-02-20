import './Header.css';

import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return(
          <div className="header">
            <div className="logo">logo</div>
              <ul className="optionsContainer">
                <li className="option"><a>Option 1</a></li>
                <li className="option"><a>Option 2</a></li>
                <li className="option"><a>Option 3</a></li>
                <li className="option"><a>Option 4</a></li>
              </ul>
          </div>
        )
      }
}