import React from "react";
import classes from './header.module.css';

const Header = () => {
    return (
      <header className={classes.header}>
              <h1 className={classes.name}>
                  BatChat
              </h1>
      </header>
    );
}

export default Header;