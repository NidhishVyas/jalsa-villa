import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
`;

const Photos = styled.img`
  aspect-ratio: 9/8;
  object-fit: cover;
  height: 150px;
  border-radius: 5px;
  object-position: center;
  @media ${(props) => props.theme.MediaQueries.l.query} {
    aspect-ratio: 29/25;
    height: 250px;
  }
`;

const Overlay = styled.div`
  z-index: 1;
  position: absolute;
  border: 2px dashed rgba(187, 147, 86, 0.5);
  border-radius: 5px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  aspect-ratio: 9/8;
  height: 140px;
  transform: translate(5px, 5px);
  @media ${(props) => props.theme.MediaQueries.l.query} {
    aspect-ratio: 29/25;
    height: 240px;
  }
`;

const Images = ({ img }) => {
  return (
    <Container>
      <Photos src={img} alt />
      <Overlay></Overlay>
    </Container>
  );
};

export default Images;
