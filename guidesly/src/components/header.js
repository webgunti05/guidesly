import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as HeaderStyle from "./layoutStyles";
import LoginForm from "./modals/login";
import { COLORS } from "../constants";

const Header = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  //Open dropdown
  const openLoginBox = () => {
    setOpen(!open);
  }

  //Open login modal method
  const openLogin = () => {
    setShow(true);
    setOpen(false);
  };

  //close login modal method
  const closeLogin = () => {
    setShow(false);
  };

  //DropDown Component
  const LoginChildContainer = ({onClick}) => {
    return(
      <>
        <div className="navDropBox">
              <button className="navDropButton" onClick={onClick}><img src="login.svg" alt="Logout" width="15"  />Login</button>
              <button className="navDropButton"><img src="logout.svg" alt="Logout" width="15" />Logout</button>
        </div>
      </>
    )
  }
  return (
    <>
      <HeaderStyle.HeaderWrapper>
        <HeaderStyle.HeaderLeft>
          <Link to="/">
            <HeaderStyle.HeaderLogo
              src="logo.svg"
              alt="Guidesly"
              title="Guidesly"
            ></HeaderStyle.HeaderLogo>
          </Link>
        </HeaderStyle.HeaderLeft>

        {/* Navgation starts from here */}

        <HeaderStyle.HeaderRight>
          <HeaderStyle.HeaderNavList>
            <Link to="/">Home</Link>
          </HeaderStyle.HeaderNavList>
          <HeaderStyle.HeaderNavList>
            <Link to="/book-a-guide">Book A Guide</Link>
          </HeaderStyle.HeaderNavList>
          <HeaderStyle.HeaderNavList>
            <Link to="/contact">Contact</Link>
          </HeaderStyle.HeaderNavList>
          <HeaderStyle.HeaderNavList>
            <Link onClick={openLoginBox} style={open ? {color: `${COLORS.HOVER_COLOR}`} : { color: 'inherit'}}>
              My Account <img className={open? 'iconOpen' : 'iconStyle'} src="down-arrow.svg" alt="Arrow" width="10" />
            </Link>
            {open && (
              <LoginChildContainer onClick={openLogin} />
            )}
          </HeaderStyle.HeaderNavList>
        </HeaderStyle.HeaderRight>
        <HeaderStyle.ClearFix></HeaderStyle.ClearFix>
        {show && <LoginForm closeLogin={closeLogin} />}
      </HeaderStyle.HeaderWrapper>
    </>
  );
};

export default Header;
