import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Hero from "../Images/Hero.png";
// import { getAllPending, getAllAck, statusUpdate } from "../Services/admin";
import Loader from "../Components/Loader.js";
import { useNavigate } from "react-router-dom";
import * as ROUTES from "../Constants/routes";
import { toast } from "react-toastify";

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

  &:hover {
    background: #b7b7b7;
    color: #fff;

    & box-icon {
      fill: #fff;
    }
  }

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

  &.show {
    display: block;
  }

  &.hide {
    display: none;
  }
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
  width: 250px;
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
  width: 80px;
  text-align: center;
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

const Status = styled.p`
  width: 105px;
  color: #58da6d;

  &.red {
    color: #ff2400;
  }
`;

const Admin = () => {
  const [pending, setPending] = useState([]);
  const [ack, setAck] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [tab, setTab] = useState(1);
  let navigate = useNavigate();

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const update = (id, status) => {
    // statusUpdate(id, status)
    //   .then((result) => {
    //     toast.success(result.data.message);
    //     setToggle(!toggle);
    //   })
    //   .catch((err) => {
    //     toast.warn(err.response.data.message);
    //   });
  };

  useEffect(() => {
    setLoading(true);
    // if (tab === 1) {
    //   getAllPending()
    //     .then((result) => {
    //       setPending(result.data.data);
    //       setLoading(false);
    //     })
    //     .catch((err) => toast.warn(err));
    // } else if (tab === 2) {
    //   getAllAck()
    //     .then((result) => {
    //       setAck(result.data.data);
    //       setLoading(false);
    //     })
    //     .catch((err) => toast.warn(err));
    // }
  }, [tab, toggle]);

  return (
    <>
      {loading && <Loader />}
      <AdminSection>
        <TabsSection>
          <TabsDiv>
            <Jalsa>Jalsa</Jalsa>
            <Tabs
              onClick={() => setTab(1)}
              className={tab === 1 ? "selected" : null}
            >
              <box-icon type="solid" name="dashboard"></box-icon>Dashboard
            </Tabs>
            <Tabs
              onClick={() => setTab(2)}
              className={tab === 2 ? "selected" : null}
            >
              <box-icon name="history"></box-icon>History
            </Tabs>
          </TabsDiv>
          <TabsDiv>
            <UserImg src={Hero} alt="Profile Pic" />
            <UserName>Nidhish Vyas</UserName>
            <UserEmail>vyasnidhish2001@gmail.com</UserEmail>
            <LogOut
              onClick={() =>
                navigate(`${ROUTES.HOMEPAGE}`, {
                  replace: false,
                })
              }
            >
              <box-icon name="log-out-circle"></box-icon>
            </LogOut>
          </TabsDiv>
        </TabsSection>
        <DataSection>
          <Dashboard>
            <Header>{tab === 1 ? "Dashboard" : "History"}</Header>
            <Welcome>Welcome, Nidhish!</Welcome>
            <Overview>
              {tab === 1 ? "Booking Overview" : "Booking History"}
            </Overview>

            {(tab === 1 ? pending : ack).map((item, i) => {
              return (
                <Booking key={i}>
                  <DateDiv>
                    <BookingDate>
                      {new Date(item.createdAt).getDate()}
                    </BookingDate>
                    <BookingDay>
                      {months[new Date(item.createdAt).getMonth()]}
                    </BookingDay>
                  </DateDiv>
                  <NameInfo>
                    <Name>{item.name}</Name>
                    <Email>{item.email}</Email>
                  </NameInfo>
                  <GuestDetails>
                    {new Date(item.checkIn).toLocaleDateString()}
                  </GuestDetails>
                  <GuestDetails>
                    {new Date(item.checkOut).toLocaleDateString()}
                  </GuestDetails>
                  <GuestDetails>
                    {item.guests.adults + "A/" + item.guests.children + "C"}
                  </GuestDetails>
                  {tab === 1 && (
                    <ButtonDiv>
                      <Button onClick={() => update(item._id, "Approved")}>
                        Accept
                      </Button>
                      <Button
                        red
                        onClick={() => update(item._id, "Unapproved")}
                      >
                        Decline
                      </Button>
                    </ButtonDiv>
                  )}
                  {tab === 2 && (
                    <Status
                      className={item.isApprove === "Unapproved" ? "red" : null}
                    >
                      {item.isApprove}
                    </Status>
                  )}
                </Booking>
              );
            })}
          </Dashboard>
        </DataSection>
      </AdminSection>
    </>
  );
};

export default Admin;
