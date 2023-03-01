import React from "react";
import styled from "styled-components";
// import Hero from "../Images/Hero.png";
import Triangle from "../Images/Triangle.svg";
import Triangle2 from "../Images/Flipped Triangle.svg";

const Container = styled.section`
  aspect-ratio: 12/13;
  height: 260px;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
`;

const SideCut = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 110px;
  width: 10px;

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }
`;

const AmenitiesImg = ({ right, img }) => {
  return (
    <Container
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <SideCut
        src={right ? Triangle2 : Triangle}
        className={right ? "right" : "left"}
        alt="Amenities Image"
      />
    </Container>
  );
};

export default AmenitiesImg;
