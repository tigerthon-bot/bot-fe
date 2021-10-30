import * as axios from 'axios';

const { VUE_APP_API_LOCATION } = process.env;

const getAllQueries = async () => {
  return axios.get(`${VUE_APP_API_LOCATION}/api/queries`);
};

const addQuery = async (data) => {
  return axios.post(`${VUE_APP_API_LOCATION}/api/queries`, data);
};

const removeQuery = async (id) => {
  return axios.delete(`${VUE_APP_API_LOCATION}/api/queries/find/${id}`);
};

export { getAllQueries, addQuery, removeQuery };
