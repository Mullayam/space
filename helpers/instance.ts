import axios from "axios";

const instance = axios.create();

instance.defaults.headers.common["Authorization"] =
  "Fn8i3N83qpWck206Mq6o5IqE7undt06v";
instance.defaults.baseURL = "http://localhost:3000/api";
export default instance;
