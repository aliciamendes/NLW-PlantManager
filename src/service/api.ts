import axios from "axios";
const api = axios.create({
  baseURL: "http://192.168.15.1:3333",
});

//dica: não usar localhost, mas sim o endereço IP do computador

export default api;
