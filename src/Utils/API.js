import axios from "axios";

const BASE_URL = "https://randomuser.me/api/?results=200";

export default {
    search: function() {
      return axios.get(BASE_URL);
    }
  };


