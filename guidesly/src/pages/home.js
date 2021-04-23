import React, {memo} from "react";
import Layout from "../components/layout";
import { HomePageWrapper, CenterSection, IntroTitle, IntroDesc } from "./pagesStyles";

const Home = () => {
  return (
    <Layout>
        <HomePageWrapper>
            <CenterSection>
            <IntroTitle>Welcome to Guidesly</IntroTitle>
          <IntroDesc>
            We have all been there: endless hours looking for the right place to
            fish, searching for the right fishing guide and combing through
            hundreds of reviews hosted on multiple sources. Guidesly simplifies
            and streamlines those pain points to provide an easier way to
            connect and get on the water fast! We are reimagining a new way of
            booking fishing trips
          </IntroDesc>
            </CenterSection>

          
        </HomePageWrapper>
    </Layout>
  );
};

export default memo(Home);
