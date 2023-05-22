import styled from "styled-components";
import React, { useState } from "react";
import Star from "../Images/Star.png";
import QR from "../Images/QRCode.png";
import InstaQR from "../Images/Insta QR.png";
import Gpay from "../Images/Gpay.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { userBooking } from "../Services/user";
import { toast } from "react-toastify";
const formData = require("form-data");

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
    width: 850px;
    max-width: unset;
    padding: 55px 75px;
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

const Cross = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;

  & box-icon {
    height: 22px;
    width: 22px;
    fill: #bb9356;
  }

  @media ${(props) => props.theme.MediaQueries.m.query} {
    top: 30px;
    right: 30px;

    & box-icon {
      height: 30px;
      width: 30px;
    }
  }
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

const Content = styled.h1`
  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #a5a5a5;
  margin: 15px 0;
`;

const UserInfo = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 243px;
  overflow-y: auto;
  transition: linear 0.4s;

  &.hide {
    transform: translateX(-150%);
  }

  @media ${(props) => props.theme.MediaQueries.m.query} {
    overflow-y: auto;
    height: 243px;
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
  margin: ${(props) => (props.less ? "0px 0 0" : "30px 0 0")};
`;

const DateInfo = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 243px;
  overflow: auto;
  transition: linear 0.4s;
  position: relative;
  top: -45%;
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
    height: 243px;
    top: -50%;
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
  cursor: pointer;

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
  cursor: pointer;
`;

const PayInfo = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 243px;
  overflow-y: scroll;
  transition: linear 0.4s;
  position: relative;
  top: -90%;
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
    height: 243px;
    top: -100%;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
  }
`;

const QRScan = styled.img`
  width: 120px;
  height: 120px;
  margin: 10px auto 0;
  text-align: center;
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

const UploadSS = styled.div`
  display: flex;
  visibility: hidden;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 5px auto 5px;
  font-family: ${(props) => props.theme.Fonts.Poppins};
`;

const Upload = styled.p`
  font-weight: 500;
  font-size: 16px;
`;

const InputSS = styled.div``;

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  font-family: ${(props) => props.theme.Fonts.Poppins};
  color: #c5c5c5;
  margin-left: 20px;
  padding: 5px 20px;
  border: 1px dashed #000;
  border-radius: 7px;
  width: 140px;

  & box-icon {
    fill: #c5c5c5;
    height: 22px;
    width: 22px;
    margin-right: 7px;
  }

  &.uploaded {
    color: #000;
    background-color: #58da6d;

    & box-icon {
      fill: #000;
    }
  }
`;

const ThankYou = styled.div`
  display: flex;
  flex-direction: column;
  height: 243px;
  overflow: auto;
  transition: linear 0.4s;
  position: relative;
  top: -150%;
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
  margin: 59px 0;
`;

const ContactUs = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 80px 0;
`;

const Logo = styled.div`
  position: relative;
  top: 0;
  transition: top ease 0.5s;

  & box-icon {
    fill: #bb9356;
    height: 54px;
    width: 54px;
    margin-right: 7px;
  }
`;

const LogoImg = styled.img`
  height: 54px;
  width: 54px;
  position: relative;
  top: 0;
  transition: top ease 0.5s;
`;

const ContactInfo = styled.a`
  text-decoration: none;
  color: #000;
  width: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover ${Logo} {
    top: -15px;
  }

  &:hover ${LogoImg} {
    top: -15px;
  }
`;

const Contact = styled.p`
  font-family: ${(props) => props.theme.Fonts.Poppins};
  margin: 15px 0 5px;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
`;

const Info = styled.p`
  font-family: ${(props) => props.theme.Fonts.Poppins};
  color: #a5a5a5;
`;

const Booking = ({ drop, setBook, user }) => {
  let form = new formData();

  const [step, setStep] = useState(4);
  const [showGuest, setShowGuest] = useState(false);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [userDetails, setUserDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    adult: 0,
    child: 0,
    paymentSS: null,
  });

  let disabledDateList = [];
  const disableDates = () => {
    // user.forEach((item) => {
    //   disabledDateList.push({
    //     start: new Date(item.checkIn),
    //     end: new Date(item.checkOut),
    //   });
    // });
  };

  if (drop) disableDates();

  const userValidate = (jump) => {
    let regex = new RegExp(
      /^((?!\.)[\w_.-]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm
    );

    if (!userDetails.fname) {
      toast.warn("Please provide your first name");
      return null;
    }
    if (!userDetails.lname) {
      toast.warn("Please provide your last name");
      return null;
    }
    if (!userDetails.phone || userDetails.phone.length !== 10) {
      toast.warn("Please provide a proper contact number");
      return null;
    }
    if (!userDetails.email.match(regex)) {
      toast.warn("Please provide a proper email");
      return null;
    }

    if (jump) setStep(2);
    return true;
  };

  const dateValidate = (jump) => {
    if (checkIn && checkOut) {
      if (JSON.stringify(checkIn) >= JSON.stringify(checkOut)) {
        toast.warn("Check-in cannot be done after check-out");
        return null;
      }

      user = user.filter((item) => {
        return (
          (JSON.stringify(checkIn) >= JSON.stringify(item.checkIn) &&
            JSON.stringify(checkIn) <= JSON.stringify(item.checkOut)) ||
          (JSON.stringify(checkOut) >= JSON.stringify(item.checkIn) &&
            JSON.stringify(checkOut) <= JSON.stringify(item.checkOut)) ||
          (JSON.stringify(checkIn) <= JSON.stringify(item.checkIn) &&
            JSON.stringify(checkOut) >= JSON.stringify(item.checkOut))
        );
      });

      if (user.length !== 0) {
        toast.warn("These dates are not available");
        return null;
      }
    } else {
      toast.warn("Please provide check-in and check-out date");
      return null;
    }

    if (userDetails.adult === 0) {
      toast.warn("Please provide a count of adults");
      return null;
    }
    setShowGuest(false);
    if (jump) setStep(3);
  };

  const booking = () => {
    if (!userDetails.paymentSS) {
      toast.warn("Please upload screenshot of payment");
      return null;
    }

    form.set("fname", userDetails.fname);
    form.set("lname", userDetails.lname);
    form.set("email", userDetails.email);
    form.set("contactNumber", userDetails.phone);
    form.set("checkIn", checkIn);
    form.set("checkOut", checkOut);
    form.set("adults", userDetails.adult);
    form.set("children", userDetails.child);
    form.set("image", userDetails.paymentSS);

    // userBooking(form)
    //   .then((result) => {
    //     toast.success(result.data.message);
    //     setStep(step + 1);
    //   })
    //   .catch((err) => {
    //     toast.warn(err.response.data.message);
    //   });
  };

  const enableScroll = (e) => {
    e.preventDefault();
    setUserDetails({
      fname: "",
      lname: "",
      email: "",
      phone: "",
      adult: 0,
      child: 0,
      paymentSS: null,
    });
    setCheckIn(null);
    setCheckOut(null);
    setStep(1);
    setBook(false);
    window.onscroll = function () {};
  };

  return (
    <>
      <BlurredBg className={drop ? "drop" : null}>
        <Popup>
          <Overlay />
          <Cross onClick={enableScroll}>
            <box-icon name="x"></box-icon>
          </Cross>
          <Heading>Reservation</Heading>
          <BookHeading> Reach out to us</BookHeading>
          {/* <Progress>
            <Step onClick={() => setStep(1)}>
              <StepNo>1</StepNo>
              <StarImg src={Star} alt="Star" />
            </Step>
            <DottedLine />
            <Step onClick={() => userValidate(true)}>
              <StepNo>2</StepNo>
              <StarImg src={Star} />
            </Step>
            <DottedLine />
            <Step
              onClick={() => {
                if (userValidate(false)) dateValidate(true);
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
          </Progress> */}
          <Content>
            Contact us here because enjoyment is the aim and we provide just
            that. Family!!! Friends!!! Fun!!! Relax!!!
          </Content>
          {/* <UserInfo className={step === 1 ? null : "hide"}>
            <InputDiv>
              <Input
                placeholder="First Name"
                type="text"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, fname: e.target.value })
                }
                value={userDetails.fname}
              />
              <Input
                placeholder="Last Name"
                type="text"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, lname: e.target.value })
                }
                value={userDetails.lname}
              />
              <Input
                placeholder="Mobile Number"
                type="number"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, phone: e.target.value })
                }
                value={userDetails.phone}
              />
              <Input
                placeholder="Email ID"
                type="email"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
                value={userDetails.email}
              />
            </InputDiv>
            <Proceed
              onClick={(e) => {
                e.preventDefault();
                userValidate(true);
              }}
            >
              Proceed
            </Proceed>
          </UserInfo> */}

          {/* <DateInfo
            className={step === 2 ? "show" : step >= 3 ? "forward" : "hide"}
          >
            <DateDiv>
              <WidthDiv onClick={() => setShowGuest(false)}>
                <DatePicker
                  minDate={new Date().setDate(new Date().getDate() + 4)}
                  onChange={(date) => {
                    setCheckIn(date);
                  }}
                  excludeDateIntervals={disabledDateList}
                  selected={checkIn}
                  dateFormat="dd/MM/yyyy"
                  customInput={<DatesDiv />}
                  placeholderText="Check-In"
                />
              </WidthDiv>
              <WidthDiv onClick={() => setShowGuest(false)}>
                <DatePicker
                  minDate={new Date().setDate(new Date().getDate() + 5)}
                  onChange={(date) => {
                    setCheckOut(date);
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
                {userDetails.adult !== 0 || userDetails.child !== 0
                  ? userDetails.adult + "A / " + userDetails.child + "C"
                  : "Guests"}
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
                      }}
                    >
                      <box-icon name="plus"></box-icon>
                    </Icon>
                    <GuestNo>{userDetails.adult}</GuestNo>
                    <Icon
                      onClick={() => {
                        if (userDetails.adult !== 0)
                          setUserDetails({
                            ...userDetails,
                            adult: userDetails.adult - 1,
                          });
                      }}
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
                      onClick={() => {
                        if (userDetails.child !== 0)
                          setUserDetails({
                            ...userDetails,
                            child: userDetails.child - 1,
                          });
                      }}
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
                dateValidate(true);
              }}
            >
              Proceed
            </Proceed>
          </DateInfo> */}

          {/* <PayInfo
            className={step === 3 ? "show" : step === 4 ? "forward" : "hide"}
          >
            <PayDivFlex>
              <PayDiv>
                <PriceHeading>Price Details</PriceHeading>
                <FlexDiv>
                  <Detail>Upto 16 people (4 BHK)</Detail>
                  <Detail>₹20,000</Detail>
                </FlexDiv>
                <FlexDiv>
                  <Detail>For 4 people (1 BHK)</Detail>
                  <Detail>₹5,000</Detail>
                </FlexDiv>
                <Line />
                <FlexDiv>
                  <Total>Upload Payment SS</Total>

                  <InputSS>
                    <Label
                      htmlFor="paymentSS"
                      className={userDetails.paymentSS ? "uploaded" : null}
                    >
                      <box-icon name="upload"></box-icon>
                      {userDetails.paymentSS ? "Uploaded" : "Upload"}
                    </Label>
                  </InputSS>
                  <input
                    type="file"
                    id="paymentSS"
                    style={{ display: "none" }}
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        paymentSS: e.target.files[0],
                      })
                    }
                  />
                </FlexDiv>
              </PayDiv>
              <PayLine />
              <PayDiv>
                <PriceHeading margin>Payment Options</PriceHeading>
                <PaymentFlex>
                  <QRScan src={QR} alt="jalsa.futurefarm@okaxis" />
                  <Or>OR</Or>
                  <GpayDiv>
                    <GpayImg src={Gpay} alt="Gpay logo" />
                    <Number>9137346274</Number>
                  </GpayDiv>
                </PaymentFlex>
              </PayDiv>
            </PayDivFlex>
            <UploadSS>
              <Upload>Upload Payment SS</Upload>
              <InputSS>
                <Label
                  htmlFor="paymentSS"
                  className={userDetails.paymentSS ? "uploaded" : null}
                >
                  <box-icon name="upload"></box-icon>
                  {userDetails.paymentSS ? "Uploaded" : "Upload"}
                </Label>
              </InputSS>
              <input
                type="file"
                id="paymentSS"
                style={{ display: "none" }}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    paymentSS: e.target.files[0],
                  })
                }
              />
            </UploadSS>
            <Proceed
              onClick={(e) => {
                e.preventDefault();
                booking();
              }}
              less
            >
              Proceed
            </Proceed>
          </PayInfo> */}

          {/* <ThankYou className={step === 4 ? "show" : "hide"}>
            <ThankYouText>
              Thank You for booking Jalsa, our admin will confirm your booking
              and get in contact with you soon.
            </ThankYouText>
            <Proceed onClick={enableScroll}>Close</Proceed>
          </ThankYou> */}

          <ContactUs>
            <ContactInfo
              href="https://www.instagram.com/jalsa_villa/"
              target="_blank"
            >
              {/* <LogoImg src={InstaQR} /> */}
              <Logo>
                <box-icon type="logo" name="instagram"></box-icon>
              </Logo>
              <Contact>Instagram</Contact>
              <Info>@jalsa_villa</Info>
            </ContactInfo>
            <ContactInfo href="tel:+919137346274" target="_blank">
              <Logo>
                <box-icon name="phone"></box-icon>
              </Logo>
              <Contact>Phone</Contact>
              <Info>+91 91373 46274</Info>
            </ContactInfo>
            <ContactInfo
              href="https://api.whatsapp.com/send?phone=919137346274"
              target="_blank"
            >
              <Logo>
                <box-icon type="logo" name="whatsapp"></box-icon>
              </Logo>
              <Contact>WhatsApp</Contact>
              <Info>+91 91373 46274</Info>
            </ContactInfo>
            {/* <ContactInfo
              href="mailto:jalsa.futurefarm@gmail.com"
              target="_blank"
            >
              <Logo>
                <box-icon name="envelope"></box-icon>
              </Logo>
              <Contact>e-mail</Contact>
              <Info>jalsa.futurefarm@gmail.com</Info>
            </ContactInfo> */}
          </ContactUs>
        </Popup>
      </BlurredBg>
    </>
  );
};

export default Booking;
