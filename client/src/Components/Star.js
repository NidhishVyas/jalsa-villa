import React from "react";
import styled from "styled-components";
import Img from "../Images/Star.png";

const StarImg = styled.img`
  aspect-ratio: 1;
  height: 20px;
`;

const Star = () => {
  return <StarImg src={Img} />;
};

export default Star;
