import React, { useContext, useState } from "react";
import * as LoginStyle from "./loginStyles";
import { Formik } from "formik";
import * as Yup from "yup";
import { UserContext } from "../../contexts/UserContext";

const LoginForm = ({ closeLogin }) => {
  const { dispatch } = useContext(UserContext);
  const [isSubmit, setIsSubmit] = useState(false);

  //YUP validation schema
  const LoginValidationSchema = Yup.object().shape({
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
    isLogin: Yup.boolean(),
  });

  return (
    <>
      <LoginStyle.LoginMask>
        <LoginStyle.LoginWrapper>
          <LoginStyle.LeftLogin>
            <LoginStyle.CloseIcon onClick={closeLogin}>
              <img src="cancel.svg" alt="Close" width="100%" />
            </LoginStyle.CloseIcon>
            <LoginStyle.LeftLoginImage src="loginLeft.png" alt="Login" />
            <LoginStyle.FormWrapper>
              <LoginStyle.LoginHeading>
                Login to Guidesly
                <img src="Logo_Small.png" alt="Guidely" width="30" />
              </LoginStyle.LoginHeading>

              {/* Login Form */}
              <Formik
                initialValues={{ email: "", password: "", isLogin: true }}
                validationSchema={LoginValidationSchema}
                onSubmit={(values) => {
                  setIsSubmit(true);
                  dispatch({
                    type: "LOGIN",
                    payload: values,
                  });
                  setTimeout(() => {
                    closeLogin();
                    setIsSubmit(false);
                  }, 1000);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                }) => (
                  <LoginStyle.LoginMainForm onSubmit={handleSubmit}>
                    <label htmlFor="email">
                      <LoginStyle.LoginMainFormInput
                        id="email"
                        type="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        touched={touched.email}
                        placeholder="Email Id"
                        isError={errors.email && touched.email && errors.email}
                      ></LoginStyle.LoginMainFormInput>
                      <LoginStyle.ErrorLoginDiv>
                        {errors.email && touched.email && errors.email}
                      </LoginStyle.ErrorLoginDiv>
                    </label>

                    <label htmlFor="password">
                      <LoginStyle.LoginMainFormInput
                        id="password"
                        type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        touched={touched.password}
                        placeholder="Password"
                        isError={
                          errors.password && touched.password && errors.password
                        }
                      ></LoginStyle.LoginMainFormInput>
                      <LoginStyle.ErrorLoginDiv>
                        {errors.password && touched.password && errors.password}
                      </LoginStyle.ErrorLoginDiv>
                    </label>
                    {isSubmit && <LoginStyle.IsSuccess>Login Succesfully</LoginStyle.IsSuccess>}
                    <LoginStyle.LoginButton type="submit">
                      Login
                    </LoginStyle.LoginButton>
                  </LoginStyle.LoginMainForm>
                )}
              </Formik>

              {/* Login Form */}
            </LoginStyle.FormWrapper>
          </LoginStyle.LeftLogin>
        </LoginStyle.LoginWrapper>
      </LoginStyle.LoginMask>
    </>
  );
};

export default LoginForm;
