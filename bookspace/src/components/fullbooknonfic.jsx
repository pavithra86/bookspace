import Booktit from "./booktit";
import Alldetialhook from "../Hooks/Alldetial.hook";
import "../App.css";
import Cookies from "universal-cookie";
import { Redirect } from "react-router-dom";
import { useState } from "react";
const cookies = new Cookies();

function Fullbooknonfic() {

  const [input, setinput] = useState("")
  var logins = cookies.get("login");
  if (logins !== "true") {
    return <Redirect to="/login" />;
  }
  const { isLoading, data, isError, error } = Alldetialhook();

  if (isLoading) {
    return <h1>Loading!!!!!!!</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  //   const [datas, setdatas] = useState([])
  //   const [fic, setfic] = useState([])
  // useEffect(async() => {
  //     var ficdata =await axios.get("http://localhost:2000/detail")
  //     console.log("datassssss!!!!!",ficdata.data)
  //     setdatas(ficdata.data)
  //
  // }, [])
  let ficc = data.data.filter((d) => d.category_Id === "Non fiction");
  //     console.log("fiction!!!!!!!",fi)
  //     setfic(fi)
  var search = ficc.filter((a) => {
    const aa = a.Book_name.includes(input);
    return aa;
  });
  var fic = search.length == 0 ? ficc : search;
  const arritem = [];
  if (fic.length !== 0) {
    var iii = fic;
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
  console.log(arritem);

  return (
    <div class="tob_mar">
      {/* <!-- All Products --> */}

      <h1 className="titles">NON FICTIONAL</h1>
      <div className="searchbars">Search 
      <input type="text" onChange={(e)=>setinput(e.target.value)}/>
      </div>
      <section class="section all-products" id="products">
        {arritem}
      </section>

      {/* <!--footer-->  */}
    </div>
  );
}

export default Fullbooknonfic;
