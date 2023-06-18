import { useQuery } from "react-query";
import axios from "axios";

function Alldetialhook() {
  var fet = () => {
    return axios.get("http://localhost:2000/detail");
  };
  return useQuery("all-detial", fet);
}

export default Alldetialhook;
