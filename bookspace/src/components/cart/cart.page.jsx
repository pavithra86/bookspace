import React, { useState } from "react";
import Carthook from "../../Hooks/cart.hook";
import Cartitem from "./cart.item";
import Cookies from "universal-cookie";
import axios from "axios";
function Cartpage() {
  const { data, isLoading, isError, error } = Carthook();
  const [total, settotal] = useState(0)
  if (isLoading) {
    return <h1>Loading!!!!!!!!!!</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  var cookies = new Cookies();

  var id = cookies.get("email");
  var a = data.data.filter((da) => da.Person_id == id);
  console.log("data in filter cart", a);
  var tot=0;
  a.map((da)=>tot=tot+parseInt( da.Book_price ))
  var itemsss = a.map((da) =>  <Cartitem items={da} />);
  //    var {}=
  var subb =async() => {
    a.map(async(da) => {
     
      let data = {
        Book_name: da.Book_name,
        Person_id: da.Person_id,
        Book_id: da.Book_id,
        Book_price: da.Book_price,
        items: da.items,
        Image: da.Image,
      };
      await axios.post("http://localhost:2000/purchase", data);

       data = {
        data: {
          idd: da._id,
        },
      };
      await axios
        .delete("http://localhost:2000/cart", data)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    });

  };

  return (
    <div class="container-md cart">
      <table>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
        {itemsss}
      </table>
      <div class="total-price">
      <table>
        <tr>
          <td>Total</td>
          <td>₹{tot}</td>
        </tr>
      </table>
      <button onClick={subb}>Proceed To Checkout</button>
      <div>Payment mode : Cash on delivery</div>
    </div>
     
    </div>
  );
}

export default Cartpage;
