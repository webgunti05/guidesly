import styled from "@emotion/styled";
import { FONT_FAMILY, COLORS, BREAKPOINTS } from "../constants";

export const ClearFix = styled.div`
  clear: both;
`;
export const HeaderWrapper = styled.div`
  display: block;
  -webkit-box-shadow: 0px 0px 5px #000;
  -moz-box-shadow: 0px 0px 5px #000;
  box-shadow: 0px 0px 2px #333;
  background-color: ${COLORS.WHITE};
  padding: 6px 50px 0px 50px;
  z-index: 10;
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  top: 0px;
  @media screen and (max-width: ${BREAKPOINTS.TABLET_BELOW}px) {
    padding: 6px 10px 0px 10px;
  }
`;

export const HeaderLeft = styled.div`
  float: left;
  display: flex;
`;
export const HeaderLogo = styled.img`
  display: inline-flex;
  width: 200px;
  cursor: pointer;
  @media screen and (max-width: ${BREAKPOINTS.TABLET_BELOW}px) {
    width: 100px;
  }
`;
export const HeaderRight = styled.ul`
  float: right;
  display: flex;
  list-style: none;
  padding: 0px;
  margin: 0px;
  @media screen and (max-width: ${BREAKPOINTS.MOBILE_DEVICES}px) {
    position: fixed;
    background-color: ${COLORS.WHITE};
    width: 200px;
    height: 100%;
    top: 0px;
    bottom: 0px;
    right: -220px;
    box-shadow: 0px 0px 15px ${COLORS.GRAY};
    display: block;
    padding-top: 30px;
  }
`;
  

export const HeaderNavList = styled.li`
  font-family: ${FONT_FAMILY};
  font-size: 14px;
  font-weight: 400;
  position: relative;
  cursor: pointer;
  &:nth-last-child(1) {
    color: ${COLORS.DARK_GREEN};
    font-weight: 600;
    text-transform: uppercase;
  }
  & > a {
    display: inline-flex;
    padding: 11px 10px;
    color: inherit;
    text-decoration: none;
    outline: none;
    &:hover {
      color: ${COLORS.HOVER_COLOR};
    }
  }
  .navDropBox {
    position: absolute;
    width: 100%;
    background-color: ${COLORS.WHITE};
    box-shadow: 0px 0px 10px ${COLORS.GRAY};
  }
  .iconStyle {
    margin-left: 4px;
  }
  .iconOpen {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    transform: rotate(180deg);
    margin-left: 4px;
  }
  .navDropButton {
    background-color: ${COLORS.WHITE};
    appearance: none;
    padding: 6px 10px;
    outline: none;
    text-align: left;
    width: 100%;
    border: none;
    cursor: pointer;
    & > img {
      position: relative;
      right: 3px;
      top: 3px;
    }
  }
  @media screen and (max-width: ${BREAKPOINTS.MOBILE_DEVICES}px) {
    & > a {
      display: block;
      text-align: left;
      padding: 6px 15px;
    }
  }
`;
export const CloseIcon = styled.button`
display:none;
@media screen and (max-width: ${BREAKPOINTS.MOBILE_DEVICES}px) {
  appearance: none;
  outline: none;
  cursor: pointer;
  background-color: ${COLORS.WHITE};
  position: absolute;
  left: -15px;
  top: 0px;
  border: none;
  display:block;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  & > img {
    position: relative;
    top: 2px;
  }
}
  
`;
export const MenuIcon = styled.button`
  display:none;
  @media screen and (max-width: ${BREAKPOINTS.MOBILE_DEVICES}px) {
    appearance: none;
    display:block;
    outline: none;
    cursor: pointer;
    position: absolute;
    top: 12px;
    width: 36px!important;
    right: 50px;
    background-color: ${COLORS.WHITE};
    border: none;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    & > img {
      position: relative;
      top: 2px;
    }
  }
  @media screen and (max-width: ${BREAKPOINTS.TABLET_BELOW}px) {
    top: 2px;
    right: 8px;
    width: 32px!important;
  }

`;
