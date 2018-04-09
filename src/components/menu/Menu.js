import React, { Component } from "react";
import Navbar from "../navbar/NavBar";
import "./menu.css";

class Menu extends Component {
  render() {
    return (
      <div id="menu-holder">
        <Navbar />
        <div id="intromenu">
          <h3 id="wlcm">Welcome To Our Studio!</h3>
          <h1 class="headertit">IT'S NICE TO MEET YOU</h1>
          <button id="tmmbutton">TELL ME MORE</button>
        </div>
      </div>
    );
  }
}
export default Menu;
