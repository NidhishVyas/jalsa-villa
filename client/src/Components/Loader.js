import React from "react";
import styled from "styled-components";
import { Oval } from "react-loader-spinner";

const Container = styled.main`
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  &::before {
    content: "";
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const LoadGif = styled.div`
  height: 100px;
  width: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  z-index: 8;
`;

const Loader = () => {
  return (
    <Container>
      <LoadGif>
        <Oval
          ariaLabel="loading-indicator"
          height={100}
          width={100}
          strokeWidth={5}
          strokeWidthSecondary={1}
          color="#bb9356"
          secondaryColor="white"
        />
      </LoadGif>
    </Container>
  );
};

export default Loader;
