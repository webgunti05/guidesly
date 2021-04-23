import styled from "@emotion/styled";
import { FONT_FAMILY, COLORS } from "../constants";

export const ClearFix = styled.div`
  clear: both;
`;
export const HomePageWrapper = styled.div`
  display: block;
  background-color: ${COLORS.GRAY_LIGHTER};
  height: 100vh;
  position: relative;
`;

export const CenterSection = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
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
  display: flex;
  list-style: none;
  margin: 0px;
  padding: 0px;
`;
export const BookGuideListItem = styled.li`
  width: 33.3333%;
  float: left;
  margin: 1% 0.5%;
  box-sizing: border-box;
  border: 1px solid ${COLORS.GRAY_LIGHT};
  padding: 8px;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
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
  .inputStyle {
    padding: 6px 10px;
    font-family: ${FONT_FAMILY};
    -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  border: 1px solid ${COLORS.GRAY_LIGHT};
  background-color: ${COLORS.WHITE};
  margin:2px;
  &:focus{
    box-shadow:0px 0px 5px ${COLORS.HOVER_COLOR};
    border:none;
    outline:none;
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
  border:none;
  height:33px;
  margin-top:2px;
  cursor:pointer;
  color: ${COLORS.WHITE};
`;
