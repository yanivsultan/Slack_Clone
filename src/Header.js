import React from "react";
import "./Header.css";
import { Avatar } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const Header = () => {
  return (
    <div>
      <div className='header'>
        <div className='header__left'>
          <Avatar className="header__avatar" alt="Yaniv" src="" />
          <AccessTimeIcon />


          {/* Time icon */}
        </div>
        <div className='header__search'>
          <SearchIcon />
          <input placeholder="Search Here"/>
        </div>
        <div className='header__right'>
        <HelpOutlineIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
