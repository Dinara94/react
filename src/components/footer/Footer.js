import "./Footer.css";

import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <ul className="footerLinks">
                <li className="link"><a>Link 1</a></li>
                <li className="link"><a>Link 2</a></li>
                <li className="link"><a>Link 3</a></li>
                <li className="link"><a>Link 4</a></li>
              </ul>
        <div className="networks">
          <a className="media">Insta</a>
          <a className="media">FB</a>
        </div>
      </footer>
    );
  }
}
