import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <nav id="navbar">
        <div class="title">Start Bootstrap</div>
        <button class="menu-directory">MENU</button>
        <div class="directory">
          <div>SERVICES</div>
          <div>PORTFOLIO</div>
          <div>ABOUT</div>
          <div>TEAM</div>
          <div>CONTACT</div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
