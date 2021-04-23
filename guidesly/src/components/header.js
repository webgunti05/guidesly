import React, { useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import * as HeaderStyle from "./layoutStyles";
import LoginForm from "./modals/login";
import { COLORS } from "../constants";
import { UserContext } from "../contexts/UserContext";

const Header = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [sideNav, setSideNav] = useState(false);
  const { state, dispatch } = useContext(UserContext);
  const sideNavRef = useRef(null);
  console.log("state", state);
  //Open dropdown
  const openLoginBox = () => {
    setOpen(!open);
  };

  //Open login modal method
  const openLogin = () => {
    setShow(true);
    setOpen(false);
  };

  //close login modal method
  const closeLogin = () => {
    setShow(false);
  };
  //open sideNav
  const openSideNav = () => {
    setSideNav(true);
    if(sideNavRef && sideNavRef.current){
      sideNavRef.current.style.right = '0px';
    }
  };
  const closeSideNav = () => {
    setSideNav(true);
    if(sideNavRef && sideNavRef.current){
      sideNavRef.current.style.right = '-220px';
    }
  };

  //DropDown Component
  const LoginChildContainer = ({ onClick }) => {
    return (
      <>
        <div className="navDropBox">
          {state?.user?.isLogin ? (
            <button
              className="navDropButton"
              onClick={() => dispatch({ type: "LOGOUT" })}
            >
              <img src="logout.svg" alt="Logout" width="15" />
              Logout
            </button>
          ) : (
            <button className="navDropButton" onClick={onClick}>
              <img src="login.svg" alt="Logout" width="15" />
              Login
            </button>
          )}
        </div>
      </>
    );
  };
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
        <HeaderStyle.MenuIcon onClick={openSideNav}>
          <img src="menu.svg" alt="menu" width="100%" />
        </HeaderStyle.MenuIcon>
        <HeaderStyle.HeaderRight ref={sideNavRef}>
          <HeaderStyle.CloseIcon onClick={closeSideNav}>
            <img src="cancel.svg" alt="Close" width="100%" />
          </HeaderStyle.CloseIcon>
          <HeaderStyle.HeaderNavList>
            <Link to="/home">Home</Link>
          </HeaderStyle.HeaderNavList>
          <HeaderStyle.HeaderNavList>
            <Link to="/book-a-guide">Book A Guide</Link>
          </HeaderStyle.HeaderNavList>
          <HeaderStyle.HeaderNavList>
            <Link to="/contact">Contact</Link>
          </HeaderStyle.HeaderNavList>
          <HeaderStyle.HeaderNavList>
            <Link
              onClick={openLoginBox}
              style={
                open ? { color: `${COLORS.HOVER_COLOR}` } : { color: "inherit" }
              }
            >
              My Account{" "}
              <img
                className={open ? "iconOpen" : "iconStyle"}
                src="down-arrow.svg"
                alt="Arrow"
                width="10"
              />
            </Link>
            {open && <LoginChildContainer onClick={openLogin} />}
          </HeaderStyle.HeaderNavList>
        </HeaderStyle.HeaderRight>
        <HeaderStyle.ClearFix></HeaderStyle.ClearFix>
        {show && <LoginForm closeLogin={closeLogin} />}
      </HeaderStyle.HeaderWrapper>
    </>
  );
};

export default Header;
