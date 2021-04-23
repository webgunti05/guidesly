import styled from "@emotion/styled";
import { FONT_FAMILY, COLORS } from "../constants";

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
  position:fixed;
  width:100%;
  box-sizing:border-box;
  top:0px;
`;

export const HeaderLeft = styled.div`
  float: left;
  display: flex;
`;
export const HeaderLogo = styled.img`
  display: inline-flex;
  width: 200px;
  cursor: pointer;
`;
export const HeaderRight = styled.ul`
  float: right;
  display: flex;
  list-style: none;
  padding: 0px;
  margin: 0px;
`;

export const HeaderNavList = styled.li`
  font-family: ${FONT_FAMILY};
  font-size: 14px;
  font-weight: 400;
  position:relative;
  cursor: pointer;
  &:nth-last-child(1){
      color:${COLORS.DARK_GREEN};
      font-weight: 600;
      text-transform: uppercase;
  }
  & > a {
    display: inline-flex;
    padding: 11px 10px;
    color: inherit;
    text-decoration:none;
    outline:none;
    &:hover{
      color:${COLORS.HOVER_COLOR};
    }
  }
  .navDropBox{
    position:absolute;
    width: 100%;
    background-color: ${COLORS.WHITE};
    box-shadow:0px 0px 10px ${COLORS.GRAY};
  }
  .iconStyle{
    margin-left:4px;
  }
  .iconOpen{
    -webkit-transform:rotate(180deg);
    -moz-transform:rotate(180deg);
    transform:rotate(180deg);
    margin-left:4px;
  }
  .navDropButton{
    background-color:${COLORS.WHITE};
    appearance:none;
    padding: 6px 10px;
    outline:none;
    text-align:left;
    width:100%;
    border:none;
    cursor:pointer;
    &>img{
      position:relative;
      right:3px;
      top:3px;
    }
  }
`;

// export const HeaderNavListLink = styled.a`
//   display: inline-flex;
//   padding: 11px 10px;
//   &:hover{
//     color:${COLORS.HOVER_COLOR};
//   }
// `;
