import React from "react";
import styled from "styled-components";
import FooterTri from "../Images/FooterTri.png";
import Triangle from "../Images/Black Triangle.png";

const FooterSection = styled.section`
  position: relative;
  background: #222222;
  padding: 20px 60px 50px;
  text-align: center;
  color: #fff;
  margin-top: 50px;
`;

const TriangleImg = styled.img`
  position: absolute;
  fill: #000;
  top: -6.6%;
  left: 50%;
  transform: translateX(-50%);
`;

const FollowText = styled.p`
  font-weight: 400;
  font-size: 16px;
  font-family: ${(props) => props.theme.Fonts.Poppins};
  margin-bottom: 20px;
  @media ${(props) => props.theme.MediaQueries.l.query} {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`;

const SocialDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const SocialIcons = styled.div`
  background-color: #1b1b1b;
  aspect-ratio: 1;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  & box-icon {
    fill: #fff;
    aspect-ratio: 1;
    height: 22px;
  }
`;

const Heading = styled.h1`
  font-weight: 400;
  font-size: 60px;
  font-family: ${(props) => props.theme.Fonts.Ruthie};
  @media ${(props) => props.theme.MediaQueries.l.query} {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Info = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: #a5a5a5;
  font-family: ${(props) => props.theme.Fonts.Poppins};
`;

const AddressHead = styled.h1`
  font-weight: 400;
  font-size: 16px;
  font-family: ${(props) => props.theme.Fonts.Poppins};
  margin: 0px 0 5px;
  @media ${(props) => props.theme.MediaQueries.l.query} {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`;

const Copyright = styled.div`
  background-color: #1b1b1b;
  padding: 30px;
  color: #a5a5a5;
  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;

  & box-icon {
    fill: #a5a5a5;
    aspect-ratio: 1;
    height: 17px;
  }

  & span {
    color: #bb9356;
  }

  & img {
    position: absolute;
    top: -40%;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  margin: 0 auto;
  max-width: 1200px;
  @media ${(props) => props.theme.MediaQueries.l.query} {
    flex-direction: row;
    justify-content: center;
  }
`;

const Div = styled.div`
  width: 400px;
`;

const Footer = () => {
  return (
    <>
      <FooterSection>
        <TriangleImg src={Triangle} />
        <FlexDiv>
          <Div>
            <FollowText>Follow Us</FollowText>
            <SocialDiv>
              <SocialIcons>
                <box-icon type="logo" name="instagram"></box-icon>
              </SocialIcons>
              <SocialIcons>
                <box-icon name="facebook" type="logo"></box-icon>
              </SocialIcons>
              <SocialIcons>
                <box-icon name="twitter" type="logo"></box-icon>
              </SocialIcons>
            </SocialDiv>
          </Div>
          <Div>
            <Heading>Farmhouse</Heading>
            <Info>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </Info>
          </Div>
          <Div>
            <AddressHead>Address</AddressHead>
            <Info>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Info>
          </Div>
        </FlexDiv>
      </FooterSection>
      <Copyright>
        <img src={FooterTri} alt="Footer SVG" />
        <box-icon name="copyright"></box-icon>2022 Farmhouse, With&nbsp;
        <span>love</span>
      </Copyright>
    </>
  );
};

export default Footer;
