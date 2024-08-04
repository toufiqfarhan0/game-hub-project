import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "250227cdf5364509865073f6afd89464",
  },
});
