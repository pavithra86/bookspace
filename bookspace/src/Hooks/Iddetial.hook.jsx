import { useQuery } from "react-query";
import axios from "axios";

function Iddetialhook(Book_id) {
  var fun = (Book_id) => {
    // console.log();
    return axios.get(`http://localhost:2000/detail/${Book_id}`);
  };

  return useQuery("id-detial", () => fun(Book_id));
}

export default Iddetialhook;
