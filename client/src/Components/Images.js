import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  height: 150px;
  @media ${(props) => props.theme.MediaQueries.l.query} {
    height: 250px;
  }
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
  top: 50%;
  left: 50%;
  height: calc(100% - 15px);
  width: calc(100% - 15px);
  transform: translate(-50%, -50%);
`;

const Images = ({ img }) => {
  return (
    <Container>
      <Photos src={img} alt="Photos" />
      <Overlay></Overlay>
    </Container>
  );
};

export default Images;
