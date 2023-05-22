import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Hero from "../Images/Hero.jpg";
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
// import { getAll } from "../Services/user";
import { toast } from "react-toastify";
import SwimNight from "../Images/swimnight.jpg";
import Swim from "../Images/swim.jpg";
import VillaBackLong from "../Images/villabacklong.jpg";
import View from "../Images/view.jpg";
import Villa from "../Images/Villa.jpg";
import Villa2 from "../Images/villa2.jpg";
import Cric from "../Images/cric.jpg";
import Back from "../Images/Back.jpg";
import BackLong from "../Images/backlong.jpg";
import Lake from "../Images/Lake.jpg";
import One from "../Images/3.jpg";
import Two from "../Images/5.jpg";
import Three from "../Images/13.jpg";
import Four from "../Images/19.jpg";
import Offer from "../Images/Offer.png";
import Img1 from "../Images/Img1.jpg";
import Img2 from "../Images/Img2.jpg";
import Img3 from "../Images/Img3.jpg";
import Img4 from "../Images/Img4.jpg";
import Img5 from "../Images/Img5.jpg";
import Img6 from "../Images/Img6.jpg";
import Img7 from "../Images/Img7.jpg";

const Container = styled.main`
  padding: 20px;
  @media ${(props) => props.theme.MediaQueries.l.query} {
    padding: 4vh;
  }
`;

const HeroSectionMob = styled.section`
  background-image: url(${Hero});
  background-color: #000;
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
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.6);
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

const NavItems = styled.a`
  font-weight: 700;
  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-size: 16px;
  position: relative;
  width: fit-content;
  margin: 15px auto;
  cursor: pointer;
  color: #fff;

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

  @media ${(props) => props.theme.MediaQueries.l.query} {
    margin: 0 auto;
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
  }
  &.left {
    right: 50px;
    rotate: 180deg;
  }
`;

const Menu = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 10;
  & box-icon {
    fill: #fff;
    height: 35px;
    width: auto;
  }
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(217, 217, 217, 0.8);
  color: #fff;
  padding-top: 50px;
  transform: translateY(-150%);
  transition: linear 0.4s;

  &.open {
    transform: translateY(0);
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
  margin-top: 50px;
  font-family: ${(props) => props.theme.Fonts.Ruthie};
`;

const Farm = styled.p`
  font-family: ${(props) => props.theme.Fonts.Abril};
`;

const About = styled.p`
  font-size: 14px;
  color: #a5a5a5;
  font-family: ${(props) => props.theme.Fonts.Poppins};
  line-height: 18px;
  text-align: center;
  margin: 5px auto 30px;
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
  position: relative;
  max-width: 960px;
  flex-wrap: wrap;
  margin: 0 auto;
  @media ${(props) => props.theme.MediaQueries.l.query} {
    gap: 0px;
    flex-direction: row;
  }
`;

const BackImg = styled.div`
  z-index: -1;
  background-image: none;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  max-width: 1200px;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 75%;
  width: calc(100vw - 8vh);
  transform: translate(-50%, -50%);

  @media ${(props) => props.theme.MediaQueries.l.query} {
    background-image: url(${Hero});
  }
`;

const ReviewsSection = styled.section`
  background-image: url(${ReviewBg});
  padding: 10px;
  margin: 80px auto;
  height: 500px;
  position: relative;
  max-width: 1200px;
`;

const OfferSection = styled.section`
  background-image: url(${Offer});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  padding: 10px;
  margin: 80px auto;
  height: 180px;
  position: relative;
  max-width: 1200px;
  @media ${(props) => props.theme.MediaQueries.s.query} {
    height: 280px;
  }
  @media ${(props) => props.theme.MediaQueries.m.query} {
    height: 380px;
  }
  @media ${(props) => props.theme.MediaQueries.l.query} {
    height: 680px;
  }
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
  padding: 0 5px;
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
  const [toggle, setToggle] = useState(false);

  const disableScroll = () => {
    console.log("here");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };

    setToggle(!toggle);
    setBook(true);
  };

  // useEffect(() => {
  //   getAll()
  //     .then((result) => {
  //       setUser(result.data.data);
  //     })
  //     .catch((err) => {
  //       toast.warn(err.response.data.message);
  //     });
  // }, []);

  return (
    <Container>
      <Booking drop={book} setBook={setBook} user={user} />
      <HeroSectionMob>
        <Menu onClick={() => setToggle(!toggle)}>
          <box-icon name="menu-alt-right"></box-icon>
        </Menu>
        <MenuList className={toggle ? "open" : null}>
          <NavItems onClick={() => setToggle(!toggle)}>Home</NavItems>
          <NavItems onClick={() => setToggle(!toggle)}>About</NavItems>
          <NavItems onClick={() => setToggle(!toggle)}>Feature</NavItems>
          <NavItems onClick={() => setToggle(!toggle)}>Services</NavItems>
          <NavItems onClick={() => setToggle(!toggle)}>Contact Us</NavItems>
          <NavItems onClick={disableScroll}>Book Now</NavItems>
        </MenuList>
      </HeroSectionMob>
      <HeroSectionDesk>
        <Position className="right">
          <HeroTriangle src={HeroVec} className="right" alt="Triangle" />
          {/* <HeroArrow src={Arrow} className="right" alt="Arrow" /> */}
        </Position>
        <Position className="left">
          <HeroTriangle src={HeroVec} className="left" alt="Triangle" />
          {/* <HeroArrow src={Arrow} className="left" alt="Arrow" /> */}
        </Position>

        <Navbar>
          <div>
            <NavItems href="#">Home</NavItems>
          </div>
          <div>
            <NavItems href="#1">About</NavItems>
          </div>
          <div>
            <NavItems href="#2">Services</NavItems>
          </div>
          <div>
            <Name>Jalsa</Name>
          </div>
          <div>
            <NavItems href="#3">Feature</NavItems>
          </div>
          <div>
            <NavItems href="#4">Contact Us</NavItems>
          </div>
          <div onClick={disableScroll}>
            <NavBtn>Book Now</NavBtn>
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
      <Greeting id="1">
        <Hello>Hello Dear</Hello>
        <Farm>We Are Farmhousing!</Farm>
        <Star />
      </Greeting>
      <About>Come create memories with Us!!!</About>
      <ImageDiv>
        <Images img={Img1} />
        <Images img={Img2} />
        <Images img={Img3} />
        <Images img={Img4} />
        <Images img={Img5} />
        <Images img={Img6} />
        <Images img={Img7} />
      </ImageDiv>
      <Greeting id="2">
        <Hello>Hello Dear</Hello>
        <Farm>Notable Amenities</Farm>
        <Star />
      </Greeting>
      <About>
        "We have the best of Amenities to make your stay comfortable and
        relaxing"
      </About>
      <AmenitiesDiv>
        <AmenitiesInfo
          content="Clean & beautiful swimming pool."
          title="Swimming Pool"
        />
        <AmenitiesImg img={Swim} />
        <AmenitiesInfo
          content="We keep the safe of our kids at the top."
          title="Kid Swimming Pool"
        />
        <AmenitiesImg img={Back} />
        <AmenitiesImg right img={View} />
        <AmenitiesInfo
          content="We provide you an escape from your polluted cities."
          title="Flora"
        />
        <AmenitiesImg right img={Lake} />
        <AmenitiesInfo
          content="We have a lake just beside our farm house where you can enjoy the scenic view."
          title="Lake View"
        />

        <BackImg />
      </AmenitiesDiv>
      {/* <ReviewsSection>
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
        </Carousel>
      </ReviewsSection> */}

      <OfferSection />
      <Greeting id="3">
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
          <FeatureTitle>Great check-in experience</FeatureTitle>
          <FeatureInfo>
            92% of recent guests gave the check-in process a 5-star rating.
          </FeatureInfo>
        </FeatureDiv>
        <FeatureDiv>
          <FeatureLogo>
            <box-icon name="desktop"></box-icon>
          </FeatureLogo>
          <FeatureTitle>Self check-in</FeatureTitle>
          <FeatureInfo>Check yourself in with the lockbox.</FeatureInfo>
        </FeatureDiv>
      </Features>
      <div id="4">
        <Footer />
      </div>
    </Container>
  );
};

export default Home;
