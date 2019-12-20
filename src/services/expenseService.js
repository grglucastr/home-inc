import axios from "axios";
import { ROOT_URL } from "./constants";

const resource = "/expenses";
const BASE_URL = `${ROOT_URL}${resource}`;

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

  delete: async id => {
    const url = `${BASE_URL}/${id}`;
    const response = await axios.delete(url);
    return response;
  },

  listAll: async params => {
    let url = BASE_URL;
    const queryParams = [];
    if (params) {
      for (let key in params) {
        if (typeof params[key] === "object") {
          const subKeys = params[key];
          for (let subKey in subKeys) {
            const str = `${subKey}=${subKeys[subKey]}`;
            queryParams.push(str);
          }
        } else {
          const str = `${key}=${params[key]}`;
          queryParams.push(str);
        }
      }
      url += `?${queryParams.join("&")}`;
    }

    const response = await axios.get(url);
    const data = await response.data;
    return data;
  },

  findById: async id => {
    const url = `${BASE_URL}/${id}`;
    const response = await axios.get(url);
    return response;
  }
};
