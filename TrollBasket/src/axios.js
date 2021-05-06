import axios from "axios";

const instance = axios.create({
  baseUrl: "https://us-central1-clone-af7da.cloudfunctions.net/api",
});

export default instance;

