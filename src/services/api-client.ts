import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params:{
    key: '52f7fdb795d44b0099ca02c6a18682c0'
  }
});

export { CanceledError };
