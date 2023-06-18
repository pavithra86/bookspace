import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
function Purchasehook() {
  var fun = () => {
    return axios.get("http://localhost:2000/purchase");
  };
  return useQuery("purchase", fun);
}

export default Purchasehook;
