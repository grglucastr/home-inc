import axios from "axios";
import { BASE_URL } from "./constants";

export default {
  save: async expense => {
    const url = `${BASE_URL}/expenses`;
    const response = await axios.post(url, expense);
    const data = await response.data;

    return data;
  },

  listAll: async _ => {
    const url = `${BASE_URL}/expenses`;
    const response = await axios.get(url);
    const data = await response.data;
    return data;
  }
};
