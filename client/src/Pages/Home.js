import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Hero from "../Images/Hero.png";
import ReviewBg from "../Images/ReviewBg.png";
import Triangle from "../Images/Triangle.svg";
import Star from "../Components/Star";
import Images from "../Components/Images";
import AmenitiesImg from "../Components/AmenitiesImg";
import AmenitiesInfo from "../Components/AmenitiesInfo";
import Reviews from "../Components/Reviews";
import "../Helper/carousel.css";

const Container = styled.main`
  padding: 10px;
`;

const HeroSection = styled.section`
  background-image: url(${Hero});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 70vh;
  width: auto;
  position: relative;
`;

const Menu = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  & box-icon {
    fill: #fff;
    height: 35px;
    width: auto;
  }
`;

const Greeting = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 35px;
  font-weight: 400;
`;

const Hello = styled.p`
  color: #bb9356;
  font-family: ${(props) => props.theme.Fonts.Ruthie};
`;

const Farm = styled.p`
  font-family: ${(props) => props.theme.Fonts.Abril};
`;

const About = styled.p`
  font-size: 12px;
  color: #a5a5a5;
  font-family: ${(props) => props.theme.Fonts.Poppins};
  line-height: 18px;
  text-align: center;
  margin: 30px 0;
`;

const ImageDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const AmenitiesDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const ReviewsSection = styled.section`
  background-image: url(${ReviewBg});
  padding: 10px;
  margin: 30px 0;
  height: 500px;
  position: relative;
`;

const TriangleImg = styled.img`
  position: absolute;
  left: 50%;
  height: 110px;
  width: 10px;

  &.top {
    transform: translateY(-50%) rotate(90deg) matrix(1, 0, 0, -1, 0, 0);
    top: 0.5%;
  }

  &.bottom {
    transform: translateY(50%) rotate(-90deg) matrix(1, 0, 0, -1, 0, 0);
    bottom: 0.5%;
  }
`;

const Features = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const FeatureDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 230px;
  width: 325px;
  border: 1.5px solid black;
  border-radius: 10px;
  text-align: center;
  font-family: ${(props) => props.theme.Fonts.Poppins};
  transition: all 0.3s ease;

  &:hover {
    background-color: #bb9356;
    border-color: #bb9356;
    color: #fff;
  }
`;

const FeatureLogo = styled.div`
  padding: 10px;
  border: 2px solid #bb9356;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  margin: 0 auto;
  & box-icon {
    height: 40px;
    width: auto;
  }
  transition: all 0.3s ease;

  ${FeatureDiv}:hover & {
    box-shadow: 1px 0px 4px 1px rgba(0, 0, 0, 0.3);
  }
  ${FeatureDiv}:hover & box-icon {
    fill: #fff;
  }
`;

const FeatureTitle = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin: 30px 0 10px;
`;

const FeatureInfo = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: #a5a5a5;
  transition: all 0.3s ease;

  ${FeatureDiv}:hover & {
    color: #fff;
  }
`;

const Home = () => {
  return (
    <Container>
      <HeroSection>
        <Menu>
          <box-icon name="menu-alt-right"></box-icon>
        </Menu>
      </HeroSection>
      <Greeting>
        <Hello>Hello Dear</Hello>
        <Farm>We Are Farmhousing!</Farm>
        <Star />
      </Greeting>
      <About>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
        pellentesque efficitur ante, in viverra sem interdum sed. Ut non
        tristique diam. Integer
      </About>
      <ImageDiv>
        <Images img={Hero} />
        <Images img={Hero} />
        <Images img={Hero} />
        <Images img={Hero} />
      </ImageDiv>
      <Greeting>
        <Hello>Hello Dear</Hello>
        <Farm>We Are Farmhousing!</Farm>
        <Star />
      </Greeting>
      <About>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
        pellentesque efficitur ante, in viverra sem interdum sed. Ut non
        tristique diam. Integer
      </About>
      <AmenitiesDiv>
        <AmenitiesInfo
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque"
          title="Swimming Pool"
        />
        <AmenitiesImg />
      </AmenitiesDiv>
      <ReviewsSection>
        <TriangleImg src={Triangle} className="top" />
        <TriangleImg src={Triangle} className="bottom" />

        <Carousel
          infiniteLoop
          showArrows={false}
          autoPlay
          interval={5000}
          minHeight={600}
        >
          <Reviews />
          <Reviews />
          <Reviews />
          <Reviews />
        </Carousel>
      </ReviewsSection>
      <Greeting>
        <Hello>Hello Dear</Hello>
        <Farm>We Are Farmhousing!</Farm>
        <Star />
      </Greeting>
      <Features>
        <FeatureDiv>
          <FeatureLogo>
            <box-icon name="desktop"></box-icon>
          </FeatureLogo>
          <FeatureTitle>Dedicated Workspace</FeatureTitle>
          <FeatureInfo>
            A private room with wifi that’s well suited for working.
          </FeatureInfo>
        </FeatureDiv>
        <FeatureDiv>
          <FeatureLogo>
            <box-icon name="desktop"></box-icon>
          </FeatureLogo>
          <FeatureTitle>Dedicated Workspace</FeatureTitle>
          <FeatureInfo>
            A private room with wifi that’s well suited for working.
          </FeatureInfo>
        </FeatureDiv>
        <FeatureDiv>
          <FeatureLogo>
            <box-icon name="desktop"></box-icon>
          </FeatureLogo>
          <FeatureTitle>Dedicated Workspace</FeatureTitle>
          <FeatureInfo>
            A private room with wifi that’s well suited for working.
          </FeatureInfo>
        </FeatureDiv>
      </Features>
    </Container>
  );
};

export default Home;
