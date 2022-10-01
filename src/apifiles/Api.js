import axios from "axios";

//creting Axios api and giving base url (need to be change if domain changed)
export default axios.create({
  baseURL: "https://chanceapi.tk/REST/api/",
});
