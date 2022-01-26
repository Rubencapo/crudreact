import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/ico/logo.png";

class Navbar extends Component {
  render() {
    return (
      <div className="ct-header">
        <Link to="/">
          <img className="img-logo" src={Logo} alt="logo" />
        </Link>
        <Link to="/create" className={this.props.txtcolor}>
          Create
        </Link>
      </div>
    );
  }
}

export default Navbar;
