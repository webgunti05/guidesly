import React, { memo } from "react";
import Layout from "../components/layout";
import {
  HomePageWrapper,
  ClearFix,
  IntroTitle,
  CenterSection,
  BookGuideList,
  BookGuideListItem,
  BookGuideListImage,
  BookGuidListTitle,
  BookGuidListDesc,
} from "./pagesStyles";
const BookAGuide = () => {
  const guidesData = [
    {
      id: 1,
      imageUrl: "guidethree.jpeg",
      guidName: "Captain Mark Rowell",
      guideBio:
        "For a one-of-a-kind fishing experience on the South Shore, Southport’s 28TE with Captain Mark Rowell.",
    },
    {
      id: 2,
      imageUrl: "guidetwo.jpeg",
      guidName: "Mario Melito",
      guideBio:
        "The Lady Grace V is a Coast Guard certified 43' Wesmac custom downeaster boat with heating and air-conditioning.",
    },
    {
      id: 3,
      imageUrl: "guidethree.jpeg",
      guidName: "Case White",
      guideBio:
        "Join us in St Marks for big reds, black drum, speckled trout, sheepshead, flounder, and much more year round.",
    },
  ];
  return (
    <>
      <Layout>
        <HomePageWrapper>
          <CenterSection>
            <IntroTitle>Book Your Guide</IntroTitle>
            <BookGuideList>
              {guidesData.map((guide) => (
                <BookGuideListItem key={guide.id}>
                  <BookGuideListImage
                    src={guide.imageUrl}
                    alt={guide.guidName}
                  />
                  <BookGuidListTitle>{guide.guidName}</BookGuidListTitle>
                  <BookGuidListDesc>{guide.guideBio}</BookGuidListDesc>
                </BookGuideListItem>
              ))}

              <ClearFix></ClearFix>
            </BookGuideList>
          </CenterSection>
        </HomePageWrapper>
      </Layout>
    </>
  );
};

export default memo(BookAGuide);
