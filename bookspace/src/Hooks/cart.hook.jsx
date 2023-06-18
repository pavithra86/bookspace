import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

function Carthook() {
  var fun = () => {
    return axios.get("http://localhost:2000/cart");
  };

  return useQuery("cart-items", fun);
}

export default Carthook;
