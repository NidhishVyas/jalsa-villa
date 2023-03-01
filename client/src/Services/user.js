import axios from "axios";

export const userBooking = (form) => {
  return axios({
    method: "POST",
    url: `/api/v1/user/add`,
    data: form,
  });
};

export const getAll = () => {
  return axios({
    method: "GET",
    url: `/api/v1/user/show`,
  });
};
