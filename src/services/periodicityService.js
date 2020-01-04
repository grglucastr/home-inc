import axios from "axios";
import { ROOT_URL } from "./constants";

export default {
  listAll: async () => {
    const url = `${ROOT_URL}/periodicities`;
    const response = await axios.get(url);
    const data = await response.data;
    return data;
  }
};
