import styled from "styled-components";
import React, { useState } from "react";
import Star from "../Images/Star.png";
import QR from "../Images/QRCode.png";
import Gpay from "../Images/Gpay.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { userBooking } from "../Services/user";

const BlurredBg = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.3);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -200%);

  transition: linear 0.4s;
  z-index: 10;

  &.drop {
    transform: translate(-50%, -50%);
  }
`;

const Popup = styled.div`
  background-color: #ffff;
  padding: 20px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 575px;
  width: 90%;
  max-width: 700px;
  text-align: center;
  overflow: hidden;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    height: 600px;
    width: 750px;
    max-width: unset;
    padding: 55px 25px;
  }
  @media ${(props) => props.theme.MediaQueries.l.query} {
  }
`;

const Overlay = styled.div`
  z-index: -1;
  position: relative;
  border: 2px dashed rgba(187, 147, 86, 0.5);
  position: absolute;
  top: 50%;
  left: 50%;
  height: calc(100% - 20px);
  width: calc(100% - 20px);
  transform: translate(-50%, -50%);
`;

const Heading = styled.h1`
  font-weight: 400;
  font-size: 50px;
  font-family: ${(props) => props.theme.Fonts.Ruthie};
  color: #bb9356;
`;

const BookHeading = styled.h1`
  font-weight: 400;
  font-size: 40px;
  font-family: ${(props) => props.theme.Fonts.Abril};
  color: #000;
`;

const Progress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  div:nth-of-type(${(props) => props.step}) {
    opacity: 1;
  }
`;

const Step = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.3;
`;

const StepNo = styled.p`
  font-family: "Poppins";
  font-weight: 600;
  font-size: 18px;
`;

const StarImg = styled.img`
  width: 25px;
  height: 25px;
`;

const DottedLine = styled.hr`
  border: none;
  border-top: 1px dashed rgba(0, 0, 0, 0.3);
  height: 1px;
  width: calc(25% - 30px);
  @media ${(props) => props.theme.MediaQueries.m.query} {
    width: calc(25% - 10px);
  }
`;

const UserInfo = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 325px;
  overflow-y: scroll;
  transition: linear 0.4s;

  &.hide {
    transform: translateX(-150%);
  }

  @media ${(props) => props.theme.MediaQueries.m.query} {
    overflow-y: auto;
    height: 285px;
  }
`;

const InputDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 0.3px solid rgba(46, 46, 46, 0.5);
  font-size: 14px;
  padding-left: 15px;
  font-family: ${(props) => props.theme.Fonts.Poppins};

  ::placeholder {
    color: #a5a5a5;
  }

  &:focus {
    outline: none;
  }

  @media ${(props) => props.theme.MediaQueries.m.query} {
    width: 47.5%;
  }
`;

const Proceed = styled.button`
  width: 100%;
  padding: 8px 0;
  background-color: #000;
  color: #fff;
  font-size: 16px;
  font-family: ${(props) => props.theme.Fonts.Poppins};
  margin: 30px 0 0;
`;

const DateInfo = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 325px;
  overflow: auto;
  transition: linear 0.4s;
  position: relative;
  top: -60%;
  left: 0;

  &.show {
    transform: translateX(0%);
  }

  &.hide {
    transform: translateX(150%);
  }

  &.forward {
    transform: translateX(-150%);
  }

  @media ${(props) => props.theme.MediaQueries.m.query} {
    overflow-y: auto;
    height: 285px;
  }
`;

const DateDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    gap: unset;
    justify-content: space-between;
  }
`;

const DatesDiv = styled.input`
  width: 100%;
  height: 46px;
  font-size: 16px;
  font-family: ${(props) => props.theme.Fonts.Poppins};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  border: 0.3px solid rgba(46, 46, 46, 0.5);
  opacity: 0.5;
  transition: all 0.2s;

  &:hover {
    opacity: 1;
  }

  &:focus {
    opacity: 1;
  }

  &::placeholder {
    color: #000;
  }

  & box-icon {
    height: 22px;
    width: 22px;
  }
`;

const WidthDiv = styled.div`
  width: 100%;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    width: 31% !important;
  }
`;

const GuestDiv = styled.div`
  width: 100%;
  height: 46px;
  font-size: 16px;
  font-family: ${(props) => props.theme.Fonts.Poppins};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  border: 0.3px solid rgba(46, 46, 46, 0.5);
  opacity: 0.5;
  transition: all 0.2s;
  position: relative;
  &:hover {
    opacity: 1;
  }

  &:focus {
    opacity: 1;
  }

  & box-icon {
    height: 22px;
    width: 22px;
  }

  @media ${(props) => props.theme.MediaQueries.m.query} {
    width: 31%;
  }
`;

const GuestFlex = styled.div`
  position: absolute;
  top: 45px;
  left: 1.5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.25), 2px -2px 2px rgba(0, 0, 0, 0.25);
  padding: 15px;
  display: none;

  &.show {
    display: unset;
  }
  @media ${(props) => props.theme.MediaQueries.m.query} {
    left: unset;
    right: 1.5px;
  }
`;

const GuestRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const GuestCatDiv = styled.div`
  text-align: left;
  width: 130px;
`;

const GuestCat = styled.p`
  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-size: 14px;
`;

const GuestSubCat = styled.p`
  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-size: 12px;
`;

const GuestNoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.div`
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.5);
  /* padding: 5px; */
  height: 22px;
  width: 22px;
  display: flex;
  justify-content: center;
  align-items: center;

  & box-icon {
    height: 15px;
    width: 15px;
  }
`;

const GuestNo = styled.p`
  margin: 0 7px;
  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-size: 16px;
  width: 12px;
`;

const Close = styled.p`
  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-size: 14px;
  text-decoration: underline;
  margin-left: 65%;
`;

const PayInfo = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 325px;
  overflow-y: scroll;
  transition: linear 0.4s;
  position: relative;
  top: -120%;
  left: 0;
  text-align: left;
  &.show {
    transform: translateX(0%);
  }

  &.hide {
    transform: translateX(150%);
  }
  &.forward {
    transform: translateX(-150%);
  }

  @media ${(props) => props.theme.MediaQueries.m.query} {
    overflow-y: auto;
    height: 285px;
    top: -115%;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PayDivFlex = styled.div`
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const PayDiv = styled.div`
  @media ${(props) => props.theme.MediaQueries.m.query} {
    width: 45%;
  }
`;

const PayLine = styled.div`
  border-left: 0.5px solid rgba(0, 0, 0, 0.5);
`;

const PriceHeading = styled.h1`
  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-weight: 500;
  font-size: 16px;
  margin: ${(props) => (props.margin ? "15px 0 5px" : "0 0 5px 0")};
  @media ${(props) => props.theme.MediaQueries.m.query} {
    margin: ${(props) => (props.margin ? "0px 0 5px" : "0 0 5px 0")};
  }
`;

const Detail = styled.p`
  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-weight: 400;
  font-size: 14px;
  margin: 5px 0;
  color: rgba(0, 0, 0, 0.5);
`;

const Line = styled.hr`
  width: 100%;
  /* border: 0.5px solid rgba(0, 0, 0, 0.5); */
  height: 1px;
`;

const Total = styled.p`
  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-weight: 400;
  font-size: 14px;
`;

const PaymentFlex = styled.div`
  @media ${(props) => props.theme.MediaQueries.m.query} {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

const QRScan = styled.img`
  width: 120px;
  height: 120px;
  margin: 10px auto 0;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    margin: 0;
  }
`;

const Or = styled.p`
  text-align: center;
  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-weight: 500;
  font-size: 14px;
  opacity: 0.5;
  margin: 10px 0;
`;

const GpayDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const GpayImg = styled.img`
  width: 30px;
  height: auto;
  margin-top: 10px;
`;

const Number = styled.p`
  font-weight: 500;
  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-size: 18px;
`;

const ThankYou = styled.div`
  display: flex;
  flex-direction: column;
  height: 325px;
  overflow: auto;
  transition: linear 0.4s;
  position: relative;
  top: -180%;
  left: 0;

  &.show {
    transform: translateX(0%);
  }

  &.hide {
    transform: translateX(150%);
  }
`;

const ThankYouText = styled.p`
  font-weight: 500;
  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-size: 16px;
  margin: 85px 0;
`;

const Booking = ({ drop, setBook, user }) => {
  const [step, setStep] = useState(1);
  const [showGuest, setShowGuest] = useState(false);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [toggle, setToggle] = useState([false, false, false]);
  const [userDetails, setUserDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    adult: 0,
    child: 0,
  });

  let disabledDateList = [];
  const disableDates = () => {
    user.forEach((item) => {
      disabledDateList.push({
        start: new Date(item.checkIn),
        end: new Date(item.checkOut),
      });
    });
  };

  if (drop) disableDates();

  const booking = () => {
    userBooking(userDetails, checkIn, checkOut)
      .then((result) => {
        console.log(result);
        setStep(step + 1);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  return (
    <>
      <BlurredBg className={drop ? "drop" : null}>
        <Popup>
          <Overlay />
          <Heading>Reservation</Heading>
          <BookHeading>Book Your Stay</BookHeading>
          <Progress>
            <Step
              onClick={() => {
                setStep(1);
              }}
            >
              <StepNo>1</StepNo>
              <StarImg src={Star} />
            </Step>
            <DottedLine />
            <Step
              onClick={() => {
                setStep(2);
              }}
            >
              <StepNo>2</StepNo>
              <StarImg src={Star} />
            </Step>
            <DottedLine />
            <Step
              onClick={() => {
                setStep(3);
              }}
            >
              <StepNo>3</StepNo>
              <StarImg src={Star} />
            </Step>
            <DottedLine />
            <Step>
              <StepNo>4</StepNo>
              <StarImg src={Star} />
            </Step>
          </Progress>
          <UserInfo className={step === 1 ? null : "hide"}>
            <InputDiv>
              <Input
                placeholder="First Name"
                type="text"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, fname: e.target.value })
                }
              />
              <Input
                placeholder="Last Name"
                type="text"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, lname: e.target.value })
                }
              />
              <Input
                placeholder="Mobile Number"
                type="number"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, phone: e.target.value })
                }
              />
              <Input
                placeholder="Email ID"
                type="email"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
              />
            </InputDiv>
            <Proceed
              onClick={(e) => {
                e.preventDefault();
                setStep(step + 1);
              }}
            >
              Proceed
            </Proceed>
          </UserInfo>

          <DateInfo
            className={step === 2 ? "show" : step >= 3 ? "forward" : "hide"}
          >
            <DateDiv>
              <WidthDiv>
                <DatePicker
                  minDate={new Date().setDate(new Date().getDate() + 4)}
                  onChange={(date) => {
                    setCheckIn(date);
                    setToggle((prev) =>
                      prev.map((item, i) => (i === 0 ? !item : item))
                    );
                  }}
                  excludeDateIntervals={disabledDateList}
                  selected={checkIn}
                  dateFormat="dd/MM/yyyy"
                  customInput={<DatesDiv />}
                  placeholderText="Check-In"
                />
              </WidthDiv>
              <WidthDiv>
                <DatePicker
                  minDate={new Date().setDate(new Date().getDate() + 5)}
                  onChange={(date) => {
                    setCheckOut(date);
                    setToggle((prev) =>
                      prev.map((item, i) => (i === 1 ? !item : item))
                    );
                  }}
                  excludeDateIntervals={disabledDateList}
                  selected={checkOut}
                  dateFormat="dd/MM/yyyy"
                  customInput={<DatesDiv />}
                  placeholderText="Check-Out"
                />
              </WidthDiv>

              <GuestDiv
                onClick={() => {
                  setShowGuest(!showGuest);
                }}
              >
                {toggle[2]
                  ? userDetails.adult +
                    "A / " +
                    userDetails.child +
                    "C / "
                  : "Guests"}{" "}
                <box-icon name="chevron-down"></box-icon>
              </GuestDiv>

              <GuestFlex className={showGuest ? "show" : null}>
                <GuestRow>
                  <GuestCatDiv>
                    <GuestCat>Adults</GuestCat>
                    <GuestSubCat>Age 13+</GuestSubCat>
                  </GuestCatDiv>
                  <GuestNoDiv>
                    <Icon
                      onClick={() => {
                        setUserDetails({
                          ...userDetails,
                          adult: userDetails.adult + 1,
                        });
                        setToggle((prev) =>
                          prev.map((item, i) => (i === 2 ? true : item))
                        );
                      }}
                    >
                      <box-icon name="plus"></box-icon>
                    </Icon>
                    <GuestNo>{userDetails.adult}</GuestNo>
                    <Icon
                      onClick={() =>
                        setUserDetails({
                          ...userDetails,
                          adult: userDetails.adult - 1,
                        })
                      }
                    >
                      <box-icon name="minus"></box-icon>
                    </Icon>
                  </GuestNoDiv>
                </GuestRow>
                <GuestRow>
                  <GuestCatDiv>
                    <GuestCat>Children</GuestCat>
                    <GuestSubCat>Age 2-12</GuestSubCat>
                  </GuestCatDiv>
                  <GuestNoDiv>
                    <Icon
                      onClick={() =>
                        setUserDetails({
                          ...userDetails,
                          child: userDetails.child + 1,
                        })
                      }
                    >
                      <box-icon name="plus"></box-icon>
                    </Icon>
                    <GuestNo>{userDetails.child}</GuestNo>
                    <Icon
                      onClick={() =>
                        setUserDetails({
                          ...userDetails,
                          child: userDetails.child - 1,
                        })
                      }
                    >
                      <box-icon name="minus"></box-icon>
                    </Icon>
                  </GuestNoDiv>
                </GuestRow>
                

                <Close onClick={() => setShowGuest(false)}>Close</Close>
              </GuestFlex>
            </DateDiv>

            <Proceed
              onClick={(e) => {
                e.preventDefault();
                setStep(step + 1);
              }}
            >
              Proceed
            </Proceed>
          </DateInfo>

          <PayInfo
            className={step === 3 ? "show" : step === 4 ? "forward" : "hide"}
          >
            <PayDivFlex>
              <PayDiv>
                <PriceHeading>Price Details</PriceHeading>
                <FlexDiv>
                  <Detail>₹20,000 X 3 Days</Detail>
                  <Detail>₹60,000</Detail>
                </FlexDiv>
                <FlexDiv>
                  <Detail>Service Fee</Detail>
                  <Detail>₹2,000</Detail>
                </FlexDiv>
                <Line />
                <FlexDiv>
                  <Total>Total</Total>
                  <Total>₹62,000</Total>
                </FlexDiv>
              </PayDiv>
              <PayLine />
              <PayDiv>
                <PriceHeading margin>Payment Options</PriceHeading>
                <PaymentFlex>
                  <QRScan src={QR} />
                  <Or>OR</Or>
                  <GpayDiv>
                    <GpayImg src={Gpay} />
                    <Number>976963335</Number>
                  </GpayDiv>
                </PaymentFlex>
              </PayDiv>
            </PayDivFlex>
            <Proceed
              onClick={(e) => {
                e.preventDefault();
                booking();
              }}
            >
              Proceed
            </Proceed>
          </PayInfo>

          <ThankYou className={step === 4 ? "show" : "hide"}>
            <ThankYouText>
              Thank You for booking Jalsa, our admin will confirm your booking
              and get in contact with you soon.
            </ThankYouText>
            <Proceed
              onClick={(e) => {
                e.preventDefault();
                setBook(false);
              }}
            >
              Close
            </Proceed>
          </ThankYou>
        </Popup>
      </BlurredBg>
    </>
  );
};

export default Booking;
