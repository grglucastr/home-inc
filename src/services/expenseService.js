import axios from "axios";
import { ROOT_URL } from "./constants";

const resource = "/expenses";
const BASE_URL = `${ROOT_URL}/${resource}`;

export default {
  create: async expense => {
    const response = await axios.post(BASE_URL, expense);
    const data = await response.data;
    return data;
  },

  update: async expense => {
    const url = `${BASE_URL}/${expense.id}`;
    const response = await axios.put(url, expense);
    const data = await response.data;
    return data;
  },

  listAll: async _ => {
    const response = await axios.get(BASE_URL);
    const data = await response.data;
    return data;
  },

  findById: async id => {
    const url = `${BASE_URL}/${id}`;
    const response = await axios.get(url);
    const data = await response.data;
    return data;
  }
};
