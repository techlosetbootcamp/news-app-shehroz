import axios from "axios";

const apiKey = "tJRbLzARCWUNRimfce1DBOTKOLFu9VpW";

const axiosInstance = axios.create({
  baseURL: "https://api.nytimes.com/svc/search/v2/",
  params: {
    "api-key": apiKey,
  },
});

export default axiosInstance;
