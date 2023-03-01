import React from "react";
import styled from "styled-components";
import User from "../Images/user.png";

const ReviewsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
`;

const StarDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const ReviewStar = styled.div`
  margin: 30px 0;
  & box-icon {
    fill: #ffc80a;
  }
`;

const Review = styled.p`
  font-size: 35px;
  height: 220px;
  overflow: hidden;
  font-family: ${(props) => props.theme.Fonts.Ruthie};
`;

const ReviewerImg = styled.img`
  border-radius: 50%;
  aspect-ratio: 1;
  width: auto !important;
  height: 50px;
  margin: 30px 0 20px;
`;

const Reviewer = styled.p`
  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-style: italic;
  font-weight: 500;
  font-size: 14px;
  opacity: 0.5;
`;

const Reviews = () => {
  return (
    <>
      <ReviewsDiv>
        <StarDiv>
          <ReviewStar>
            <box-icon type="solid" name="star"></box-icon>
            <box-icon type="solid" name="star"></box-icon>
            <box-icon type="solid" name="star"></box-icon>
            <box-icon type="solid" name="star"></box-icon>
            <box-icon type="solid" name="star"></box-icon>
          </ReviewStar>
        </StarDiv>
        <Review>
        "One of the most beautiful farmhouse I have even been to. It has well maintained amenities with the best service"
        </Review>
        <ReviewerImg src={User} alt="Review Img"/>
        <Reviewer>Nidhish Vyas</Reviewer>
      </ReviewsDiv>
    </>
  );
};

export default Reviews;
