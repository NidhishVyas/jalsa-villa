import React from "react";
import styled from "styled-components";
import Star from "./Star";

const Container = styled.div`
  aspect-ratio: 12/13;
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: ${(props) => props.theme.Fonts.Poppins};
  padding: 20px;
  background-color: #fff;
  position: relative;
`;

const Heading = styled.h1`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 20px;
`;

const Info = styled.p`
  margin-top: 20px;
  color: #a5a5a5;
  font-size: 13px;
`;

const Overlay = styled.div`
  z-index: 1;
  border: 2px dashed rgba(187, 147, 86, 0.5);
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  height: calc(100% - 15px);
  width: calc(100% - 15px);
  transform: translate(-50%, -50%);
`;

const AmenitiesInfo = ({ content, title }) => {
  return (
    <Container>
      <Heading>{title}</Heading>
      <Star />
      <Info>{content}</Info>
      <Overlay></Overlay>
    </Container>
  );
};

export default AmenitiesInfo;
