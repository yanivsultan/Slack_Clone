import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "./StateProvider";

const Header = () => {
  const [{ user }] = useStateValue();
  return (
    <div>
      <div className='header'>
        <div className='header__left'>
          <Avatar
            className='header__avatar'
            alt={user?.displayName}
            src={user?.photoURL}
          />
          <AccessTimeIcon />

          {/* Time icon */}
        </div>
        <div className='header__search'>
          <SearchIcon />
          <input placeholder='Search Here' />
        </div>
        <div className='header__right'>
          <HelpOutlineIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
