import React from "react";
import Cookies from "universal-cookie";
import Purchasehook from "../../Hooks/purchase.hook";
import Purchaseitems from "./purchase.items";
function purchase() {
  const { data, isLoading, isError, error } = Purchasehook();

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
  var itemsss = a.map((da) => <Purchaseitems items={da} />);
  //    var {}=

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
      {/* <button onClick={subb}>Proceed To Checkout</button> */}
    </div>
  );
}

export default purchase;
