import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Hero from "../Images/Hero.png";
import { getAllPending } from "../Services/admin";

const AdminSection = styled.section`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const TabsSection = styled.div`
  background-color: #edeff4;
  position: sticky;
  top: 0;
  left: 0;
  width: 25%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

const Jalsa = styled.h1`
  font-family: ${(props) => props.theme.Fonts.Ruthie};
  font-weight: 400;
  font-size: 60px;
  margin-bottom: 40px;
`;

const TabsDiv = styled.div``;

const Tabs = styled.p`
  border-radius: 10px;
  transition: all 0.3s;
  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-weight: 500;
  font-size: 16px;
  padding: 7px 22.5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0;
  color: #b7b7b7;
  cursor: pointer;

  & box-icon {
    height: 20px;
    width: 20px;
    margin-right: 5px;
    fill: #b7b7b7;
  }

  &:hover,
  &.selected {
    background: #000;
    color: #fff;

    & box-icon {
      fill: #fff;
    }
  }
`;

const UserImg = styled.img`
  border-radius: 50%;
  aspect-ratio: 1;
  width: 75px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const UserName = styled.p`
  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-weight: 500;
  font-size: 18px;
`;

const UserEmail = styled.p`
  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-weight: 500;
  font-size: 14px;
  color: #b7b7b7;
  margin: 10px 0 20px;
`;

const LogOut = styled.div`
  border: 1px solid #b7b7b7;
  border-radius: 5px;
  padding: 8px;
  margin: 0 auto;
  width: 42px;
  height: 42px;
  transition: all 0.3s;
  cursor: pointer;

  & box-icon {
    height: 24px;
    width: 24px;
  }

  &:hover {
    background: #000;
    color: #fff;

    & box-icon {
      fill: #fff;
    }
  }
`;

const DataSection = styled.div`
  width: 75%;
  padding: 50px 20px 20px 30px;
`;

const Dashboard = styled.div`
  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-weight: 500;
`;

const Header = styled.h1`
  font-weight: 600;
  font-size: 40px;
`;

const Welcome = styled.div`
  font-size: 20px;
  color: #a5a5a5;
  margin-bottom: 40px;
`;

const Overview = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
`;

const Booking = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  height: 60px;
  margin-bottom: 20px;
`;

const DateDiv = styled.div`
  background: #edeff4;
  border-radius: 10px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 60px;
  width: 60px;
`;

const BookingDate = styled.p``;

const BookingDay = styled.p``;

const NameInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 18px;
`;

const Email = styled.div`
  font-size: 14px;
  color: #a5a5a5;
`;

const GuestDetails = styled.div`
  font-size: 14px;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Button = styled.button`
  padding: 7px 13px;
  font-size: 14px;
  border: 0.5px solid #000000;
  border-radius: 5px;
  transition: all 0.3s;
  cursor: pointer;
  background: ${(props) => (props.red ? "#ff2400" : "#58DA6D")};
`;

const Admin = () => {
  const [pending, setPending] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getAllPending()
      .then((result) => {
        console.log("here")
        setPending(result.data);
    setLoading(false);

      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <AdminSection>
      <TabsSection>
        <TabsDiv>
          <Jalsa>Jalsa</Jalsa>
          <Tabs>
            <box-icon type="solid" name="dashboard"></box-icon>Dashboard
          </Tabs>
          <Tabs>
            <box-icon name="history"></box-icon>History
          </Tabs>
        </TabsDiv>
        <TabsDiv>
          <UserImg src={Hero} />
          <UserName>Nidhish Vyas</UserName>
          <UserEmail>vyasnidhish2001@gmail.com</UserEmail>
          <LogOut>
            <box-icon name="log-out-circle"></box-icon>
          </LogOut>
        </TabsDiv>
      </TabsSection>
      <DataSection>
        <Dashboard>
          <Header>Dashboard</Header>
          <Welcome>Welcome</Welcome>
          <Overview>Booking Overview</Overview>

          {pending.map((item, i) => {
            return (
              <Booking>
                <DateDiv>
                  <BookingDate>13</BookingDate>
                  <BookingDay>Dec</BookingDay>
                </DateDiv>
                <NameInfo>
                  <Name>Nidhish Vyas</Name>
                  <Email>vyasnidhish2001@gmail.com</Email>
                </NameInfo>
                <GuestDetails>13/12/2022</GuestDetails>
                <GuestDetails>13/12/2022</GuestDetails>
                <GuestDetails>3A/2C</GuestDetails>
                <ButtonDiv>
                  <Button>Accept</Button>
                  <Button red>Decline</Button>
                </ButtonDiv>
              </Booking>
            );
          })}
        </Dashboard>
      </DataSection>
    </AdminSection>
  );
};

export default Admin;
