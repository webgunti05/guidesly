import React from 'react';
import {CenterSection, ContactFormButton} from './pagesStyles';
import { useHistory } from "react-router-dom";

const PageNotFound = () => {
    let history = useHistory();

  const goBackHome = () => {
    history.push("/");
  }
    return(
        <>
            <CenterSection>
                <img src="page_notfound.png" alt="Page Not Found" title="Page Not Found" />
                <h3>Page Not Found</h3>
                <ContactFormButton onClick={goBackHome}>Go To Homepage</ContactFormButton>
            </CenterSection>
        </>
    )
}

export default PageNotFound;