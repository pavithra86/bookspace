import React from "react";
import Img from "../image";

import { Link } from "react-router-dom";
function booktit(props) {
  // console.log("arr", props);
  var { arr } = props;
  var p = arr;
  // console.log("pp", p);
  return (
    <>
      <Link to={`/detail/${p._id}`}>
        <div class="product">
          <div class="product-header">
            <Img item={p.Image} width="2px" />
             <ul class="icons">
             
            </ul>
          </div>
          <div class="product-footer">
            <h3>{p.Book_name}</h3>
            <h4>{p.Author_name}</h4>
            <h4 class="price">{p.Price}</h4>
          </div>
        </div>
      </Link>
    </>
  );
}

export default booktit;
