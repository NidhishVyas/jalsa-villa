import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Hero from "../Images/Hero.png";
import ReviewBg from "../Images/ReviewBg.png";
import Triangle from "../Images/Triangle.svg";
import HeroVec from "../Images/Hero Triangle.png";
import Arrow from "../Images/Arrow.svg";
import Star from "../Components/Star";
import Images from "../Components/Images";
import AmenitiesImg from "../Components/AmenitiesImg";
import AmenitiesInfo from "../Components/AmenitiesInfo";
import Booking from "../Components/Booking";
import Reviews from "../Components/Reviews";
import "../Helper/carousel.css";
import Footer from "../Components/Footer";
import { getAll } from "../Services/user";

const Container = styled.main`
  padding: 20px;
  @media ${(props) => props.theme.MediaQueries.l.query} {
    padding: 4vh;
  }
`;

const HeroSectionMob = styled.section`
  background-image: url(${Hero});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 70vh;
  width: auto;
  position: relative;
  @media ${(props) => props.theme.MediaQueries.l.query} {
    display: none;
  }
`;

const HeroSectionDesk = styled.section`
  background-image: url(${Hero});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 92vh;
  width: auto;
  position: relative;
  color: #fff;
  display: none;
  margin-bottom: 4vh;
  padding: 20px;
  @media ${(props) => props.theme.MediaQueries.l.query} {
    display: block;
  }
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  max-width: 1200px;
  margin: 0px auto;

  div:nth-of-type(1),
  div:nth-of-type(2),
  div:nth-of-type(3),
  div:nth-of-type(5),
  div:nth-of-type(6),
  div:nth-of-type(7) {
    flex-basis: 16.66%;
  }
  div:nth-of-type(4) {
    flex-basis: 20%;
  }
`;

const Name = styled.h1`
  font-size: 60px;
  font-weight: 400;
  font-family: ${(props) => props.theme.Fonts.Ruthie};
`;

const NavItems = styled.p`
  font-weight: 700;
  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-size: 16px;
  position: relative;
  width: fit-content;
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    color: #bb9356;
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: #bb9356;
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const NavBtn = styled.button`
  background: none;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  font-family: ${(props) => props.theme.Fonts.Poppins};
  padding: 5px 20px;
  border: 1px solid #fff;
  border-radius: 5px;
  transition: all 0.3s ease-out;

  &:hover {
    background: #bb9356;
    border: 1px solid #bb9356;
    color: #000;
  }
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const HeroText = styled.h1`
  font-weight: 400;
  font-size: 50px;
  font-family: ${(props) => props.theme.Fonts.Ruthie};
  color: #bb9356;
`;

const HeroHeading = styled.h1`
  font-weight: 400;
  font-size: 85px;
  line-height: 115px;
  font-family: ${(props) => props.theme.Fonts.Abril};
  width: max-content;
`;

const Position = styled.div`
  position: absolute;
  top: 40%;

  &.left {
    left: 0px;
  }
  &.right {
    right: 0px;
  }
`;

const HeroTriangle = styled.img`
  position: relative;
  top: 40%;

  &.left {
    left: -15px;
  }
  &.right {
    right: -45px;
    rotate: 180deg;
  }
`;

const HeroArrow = styled.img`
  position: relative;
  top: -52px;

  &.right {
    left: 5px;
    rotate: 180deg;
  }
  &.left {
    right: 50px;
  }
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

  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 42.5px;
  }
  @media ${(props) => props.theme.MediaQueries.l.query} {
    font-size: 50px;
  }
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
  margin: 30px auto;
  max-width: 650px;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 14px;
  }
  @media ${(props) => props.theme.MediaQueries.l.query} {
    font-size: 16px;
  }
`;

const ImageDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px 10px;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px;
  max-width: 1200px;
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
  margin: 30px auto;
  height: 500px;
  position: relative;
  max-width: 1200px;
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
  flex-wrap: wrap;
  gap: 20px;
`;

const FeatureDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 230px;
  width: 325px;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
  font-family: ${(props) => props.theme.Fonts.Poppins};
  transition: all 0.3s ease;

  @media ${(props) => props.theme.MediaQueries.l.query} {
    height: 285px;
    width: 385px;
  }

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
    @media ${(props) => props.theme.MediaQueries.l.query} {
      height: 60px;
    }
  }
  transition: all 0.3s ease;
  @media ${(props) => props.theme.MediaQueries.l.query} {
    height: 80px;
    width: 80px;
  }

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
  @media ${(props) => props.theme.MediaQueries.l.query} {
    font-size: 20px;
  }
`;

const FeatureInfo = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: #a5a5a5;
  transition: all 0.3s ease;
  @media ${(props) => props.theme.MediaQueries.l.query} {
    font-size: 16px;
  }

  ${FeatureDiv}:hover & {
    color: #fff;
  }
`;

const Home = () => {
  const [book, setBook] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getAll()
      .then((result) => {
        setUser(result.data.data);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  }, []);

  return (
    <Container>
      <Booking drop={book} setBook={setBook} user={user} />
      <HeroSectionMob>
        <Menu>
          <box-icon name="menu-alt-right"></box-icon>
        </Menu>
      </HeroSectionMob>
      <HeroSectionDesk>
        <Position className="left">
          <HeroTriangle src={HeroVec} className="left" />
          <HeroArrow src={Arrow} className="left" />
        </Position>
        <Position className="right">
          <HeroTriangle src={HeroVec} className="right" />
          <HeroArrow src={Arrow} className="right" />
        </Position>

        <Navbar>
          <div>
            <NavItems>Home</NavItems>
          </div>
          <div>
            <NavItems>About</NavItems>
          </div>
          <div>
            <NavItems>Feature</NavItems>
          </div>
          <div>
            <Name>Jalsa</Name>
          </div>
          <div>
            <NavItems>Services</NavItems>
          </div>
          <div>
            <NavItems>Contact Us</NavItems>
          </div>
          <div onClick={() => setBook(true)}>
            <NavBtn>Book now</NavBtn>
          </div>
        </Navbar>
        <HeroContent>
          <HeroText>Build With Love</HeroText>
          <HeroHeading>
            We Create <br />
            Memories to Remember
          </HeroHeading>
        </HeroContent>
      </HeroSectionDesk>
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
          showThumbs={false}
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
        <Farm>Best Features!</Farm>
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
      <Footer />
    </Container>
  );
};

export default Home;
