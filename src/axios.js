import axios from "axios";
// return a new version of axios with useful settings applied
export default axios.create({
    baseURL: "http://username.restful.training/api/counters",
    params: {
        key: "b1a4b1a4b1a4-api-key-b1a4b1a4ab1a4",
    },
    headers: {
        Accept: "application/json",
    },
});