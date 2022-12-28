import axios from "axios";

export const getAllPending = () => {
  return axios({
    method: "GET",
    url: `/api/v1/admin/pending`,
  });
};
