import axios from "axios";

const BASE_URL = `http://localhost:8080`;

export default {
  listAll: async function() {
    const url = `${BASE_URL}/expense-types`;
    const response = await axios.get(url);
    const data = await response.data;
    return data;
  }
};
