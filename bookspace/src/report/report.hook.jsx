import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

function ReportHook() {
  var fun = async () => {
    var datas = await axios.get("http://localhost:2000/purchase");
    return datas.data;
  };
  return useQuery("report", fun);
}

export default ReportHook;
