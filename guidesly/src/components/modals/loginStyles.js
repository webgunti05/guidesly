import styled from "@emotion/styled";
import { FONT_FAMILY, COLORS } from "../../constants";

export const ClearFix = styled.div`
  clear: both;
`;
export const LoginMask = styled.div`
    background-color: rgba(0,0,0,.5);
    position:fixed;
    top:0px;
    left:0px;
    bottom:0px;
    right:0px;
    width:100%;
    height:100%;
    cursor:pointer;
`;

export const LoginWrapper = styled.div`
    width:400px;
    position:absolute;
    top: 50%;
    left: 50%;
   -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background-color: ${COLORS.WHITE};
    padding:0px;
    -webkit-border-radius:2px;
    -moz-border-radius:2px;
    border-radius:2px;
    padding-bottom:10px;
`;

export const LeftLogin = styled.div`
    width:100%;
    position:relative;
`;
export const LeftLoginImage = styled.img`
    width:100%;
    object-fit: cover;
`;
export const RightLogin = styled.div`
    width:100%;
`;
export const FormWrapper = styled.div`
    padding:10px 20px;
    position:relative;
    z-index:100;
    background-color:rgba(255,255,255, 1);
    width:90%;
    box-sizing:border-box;
    border-radius:4px;
    margin:-100px auto 0px auto;
    box-shadow:0px -10px 10px ${COLORS.HOVER_COLOR};
`;

export const LoginHeading = styled.h3`
    font-family:${FONT_FAMILY};
    font-size:24px;
    font-weight:300;
    float:right;
    display:block;
    text-align:left;
    margin:0px;
    padding:0px;
    width:100%;
    & > img{
        position:relative;
        top:6px;
    }
    border-bottom:1px solid ${COLORS.GRAY};
`;

export const LoginMainForm = styled.form`
    padding:0px 0px 0px 0px;
`;

export const CloseIcon = styled.button`
    appearance:none;
    outline:none;
    cursor:pointer;
    background-color:${COLORS.WHITE};
    position:absolute;
    right:-15px;
    top:-15px;
    border:none;
    border-radius:100%;
    width:30px;
    height:30px;
    & > img{
        position:relative;
        top:2px;
    }
`;

export const LoginMainFormInput = styled.input(props => {
    const out = [
       {
        width:'100%',
        padding:'6px 10px',
        border:props.isError ? `1px solid ${COLORS.RED}` : `1px solid ${COLORS.GRAY_LIGHT}`,
        borderRadius:'2px',
        appearance:'none',
        outline:'none',
        marginTop: '10px',
        boxSizing:'border-box',
       }
    ];
    return out;
    

});
   

export const ErrorLoginDiv = styled.div`
    color: ${COLORS.RED};
    font-size:13px;
    text-align:left;
`;

export const LoginButton = styled.button`
    width:100%;
    outline:none;
    appearaance:none;
    background-color: ${COLORS.HOVER_COLOR};
    color:${COLORS.WHITE};
    text-align:center;
    padding: 8px 0px;
    font-family:${FONT_FAMILY};
    font-size:14px;
    text-transform:uppercase;
    margin-top:20px;
    border:none;
    border-radius:2px;
    cursor:pointer;
`;