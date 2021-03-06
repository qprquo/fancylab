import React from 'react';
import { asset } from "../util/util";
import { Link } from "gatsby";

const Header = () => {
  const onClick = (e) => {
    e.preventDefault();
    document.body.classList.toggle('mobile-menu-is-shown');
  }
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="header__logo">
          <img src={asset("/images/logo-purple.svg")} alt="fancylabz.xyz" />
          <span className="header__logo-text"><span>Fancy</span>Lab</span>
        </Link>
      </div>
      <button onClick={onClick} className="header__toggle toggle">
        <div className="toggle__inner"></div>
      </button>
    </header>
  )
}

export default Header;