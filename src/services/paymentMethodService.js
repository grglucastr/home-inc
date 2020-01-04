import axios from "axios";
import { ROOT_URL } from "./constants";

export default {
  listAll: async () => {
    const url = `${ROOT_URL}/payment-methods/`;
    const response = await axios.get(url);
    const data = await response.data;
    return data;
  }
};
