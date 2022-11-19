import React from "react";
import styled from "styled-components";
import Star from "./Star";

const Container = styled.div`
  aspect-ratio: 12/13;
  height: 260px;
  border: 2px dashed #bb9356;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: ${(props) => props.theme.Fonts.Poppins};
  padding: 0 15px;
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

const AmenitiesInfo = ({ content, title }) => {
  return (
    <Container>
      <Heading>{title}</Heading>
      <Star />
      <Info>{content}</Info>
    </Container>
  );
};

export default AmenitiesInfo;
