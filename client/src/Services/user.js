import axios from "axios";

export const userBooking = (userDetails, checkIn, checkOut) => {
  return axios({
    method: "POST",
    url: `/api/v1/user/add`,
    data: {
      fname: userDetails.fname,
      lname: userDetails.lname,
      contactNumber: userDetails.phone,
      email: userDetails.email,
      checkIn,
      checkOut,
      adults: userDetails.adult,
      children: userDetails.child,
    },
  });
};

export const getAll = () => {
  return axios({
    method: "GET",
    url: `/api/v1/user/show`,
  });
};
