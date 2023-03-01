import axios from "axios";

export const getAllPending = () => {
  return axios({
    method: "GET",
    url: `/api/v1/admin/pending`,
  });
};

export const statusUpdate = (id, status) => {
  return axios({
    method: "PUT",
    url: `/api/v1/admin/status/${id}`,
    data: { status },
  });
};

export const getAllAck = () => {
  return axios({
    method: "GET",
    url: `/api/v1/admin/ack`,
  });
};
