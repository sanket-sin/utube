import axios from "axios";
const KEY = "AIzaSyCWi-ykDyXxqTRwR2T0t_b9iOz-Qf-K2MY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    // maxResult: 5,
    key: KEY,
  },
});