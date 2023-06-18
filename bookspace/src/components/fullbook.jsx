import Booktit from "./booktit";
import Alldetialhook from "../Hooks/Alldetial.hook";
import "../App.css";
import Cookies from "universal-cookie";
import { Redirect } from "react-router-dom";
import { useState } from "react";
const cookies = new Cookies();

function Fullbook() {
  const [input, setinput] = useState("")
  // const [datas, setdatas] = useState([]);
  // const [fic, setfic] = useState([]);
  var logins = cookies.get("login");
  console.log("login", logins);
  if (logins !== "true") {
    return <Redirect to="/login" />;
  }

  const { isLoading, data, error, iserror } = Alldetialhook();
  if (isLoading) {
    return <h1>loading!!!!!!!!!</h1>;
  }
  if (iserror) {
    console.log("message", error.message);
  }
  // console.log("dataqqqqqqqqqqqqqqqqqqqqqqq", data);

  // useEffect(async() => {
  //     var ficdata = await axios.get("http://localhost:2000/detail");
  //     console.log("datassssss!!!!!", ficdata.data);
  //     setdatas(ficdata.data);
  //
  // }, []);
  let fii = data.data.filter((d) => d.category_Id === "fiction");
  //     console.log("fiction!!!!!!!", fi);
  //     setfic(fi);
  var search = fii.filter((a) => {
    const aa = a.Book_name.includes(input);
    return aa;
  });
  var fi = search.length == 0 ? fii : search;
  const arritem = [];
  if (fi.length !== 0) {
    var iii = fi;
    var a = iii.length;
    var x = a / 2;
    if (typeof x === parseInt(x)) {
      // console.log(x);
    } else {
      x = parseInt(x);
      x++;
    }
  }

  for (let i = 0; i < x; i++) {
    let arra = iii.slice(i * 3, (i + 1) * 3);
    arritem.push(
      <div className={"boox"}>
        {" "}
        {arra.map((arr) => (
          <Booktit arr={arr} />
        ))}{" "}
      </div>
    );
  }
  // console.log(arritem);

  return (
    <div class="tob_mar">
      {/* <!-- All Products --> */}{" "}
      <h1 className="titles">FICTIONAL</h1>
      <div className="searchbars">Search 
      <input type="text" onChange={(e)=>setinput(e.target.value)}/>
      </div>
      <section class="section all-products" id="products">
        {" "}
        {arritem}{" "}
      </section>
      {/* <!--footer-->  */}{" "}
    </div>
  );
}

export default Fullbook;
