import React from "react";
import Img from "../../image";
import axios from "axios";
function Cartitem(props) {
  var { Book_name, Book_price, items, Image, _id } = props.items;

  let pri = parseInt(Book_price) * items;

  var rem = () => {
    let data = {
      data: {
        idd: _id,
      },
    };
    axios
      .delete("http://localhost:2000/cart", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <tr>
        <td>
          <div class="cart-info">
            <Img item={Image} width="2px"></Img>
            <div>
              <p>{Book_name}</p>
              <span>Price: ₹{Book_price}</span>
              <br />
              <button onClick={rem}>remove</button>
            </div>
          </div>
        </td>
        <td>
          <div>{items}</div>
        </td>
        <td>₹{pri}</td>
      </tr>
    </>
  );
}

export default Cartitem;
