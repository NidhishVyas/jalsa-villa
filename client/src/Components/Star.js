import React from "react";
import styled from "styled-components";
import Img from "../Images/Star.png";

const StarImg = styled.img`
  aspect-ratio: 1;
  height: 30px;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    height: 40px;
  }
`;

const Star = () => {
  return <StarImg src={Img} alt="Star" />;
};

export default Star;
