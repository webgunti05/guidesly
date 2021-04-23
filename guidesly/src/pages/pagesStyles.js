import styled from "@emotion/styled";
import { FONT_FAMILY, COLORS, BREAKPOINTS } from "../constants";

export const ClearFix = styled.div`
  clear: both;
`;
export const HomePageWrapper = styled.div`
  display: block;
  background-color: ${COLORS.GRAY_LIGHTER};
  height: 100vh;
  position: relative;
  @media screen and (max-width: ${BREAKPOINTS.TABLET_LANDSCAPE}px) {
    height:auto;
    background-color:${COLORS.WHITE};
  }
`;

export const CenterSection = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width:1024px;
  @media screen and (max-width: ${BREAKPOINTS.TABLET_LANDSCAPE}px) {
    width:100%;

    position: relative;
    top: 100px;
    left: 0px;
    padding: 0px 20px 20px 20px;
    -ms-transform: translate(0, 0);
    transform: translate(0, 0);
    box-sizing:border-box;
  }
`;

export const IntroTitle = styled.h1`
  font-family: ${FONT_FAMILY};
  font-size: 30px;
`;

export const IntroDesc = styled.p`
  font-family: ${FONT_FAMILY};
  font-size: 15px;
  font-weight: 300;
`;
export const BookGuideList = styled.ul`
  width: 100%;
  display: block;
  list-style: none;
  margin: 0px;
  padding: 0px;
  
`;
export const BookGuideListItem = styled.li`
  width: 30.3333%;
  float: left;
  display: block;
  margin: 1% 1%;
  box-sizing: border-box;
  border: 1px solid ${COLORS.GRAY_LIGHT};
  padding: 8px;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  @media screen and (max-width: ${BREAKPOINTS.MOBILE_DEVICES}px) {
    width: 98%;
    float: none;
    margin: 1% 1%;
    display:block;
  }
`;
export const BookGuideListImage = styled.img`
  width: 100%;
`;
export const BookGuidListTitle = styled.h3`
  font-family: ${FONT_FAMILY};
  font-size: 16px;
  font-weight: 500;
  text-align: left;
`;
export const BookGuidListDesc = styled.p`
  font-family: ${FONT_FAMILY};
  font-size: 13px;
  font-weight: 300;
  text-align: left;
`;

export const ContactAdress = styled.p`
  font-family: ${FONT_FAMILY};
  font-size: 14px;
`;
export const ContactForm = styled.form`
  display: flex;
  @media screen and (max-width: ${BREAKPOINTS.TABLET_LANDSCAPE}px) {
    display: block;
  }
  .inputStyle {
    padding: 6px 10px;
    font-family: ${FONT_FAMILY};
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    border: 1px solid ${COLORS.GRAY_LIGHT};
    background-color: ${COLORS.WHITE};
    margin: 2px;
    width:100%;
    box-sizing:border-box;
    &:focus {
      box-shadow: 0px 0px 5px ${COLORS.HOVER_COLOR};
      border: none;
      outline: none;
    }
  }
`;

export const ContactFormButton = styled.button`
  padding: 0px 10px;
  font-family: ${FONT_FAMILY};
  background-color: ${COLORS.HOVER_COLOR};
  outline: none;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  border: none;
  height: 33px;
  margin-top: 2px;
  cursor: pointer;
  color: ${COLORS.WHITE};
`;
