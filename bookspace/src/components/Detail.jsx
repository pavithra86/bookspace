import React, { useState } from "react";
import axios from "axios";
import Iddetialhook from "../Hooks/Iddetial.hook";
import { useParams } from "react-router-dom";
import Img from "../image";
import Cookies from "universal-cookie";
import { Redirect } from "react-router-dom";
const cookies = new Cookies();

function Detail() {
  const [items, setitems] = useState(0);
  var { Book_id } = useParams();
  console.log(Book_id);
  const { isLoading, data, isError, error } = Iddetialhook(Book_id);

  var logins = cookies.get("login");
  if (logins !== "true") {
    return <Redirect to="/login" />;
  }
  if (isLoading) {
    return <div>Loading!!!!!!!!!!....</div>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  console.log(data.data);
  var { Price, Book_name, Author_name, Image } = data.data;
  var aa = cookies.get("email");
  var datapost = (e) => {
    e.preventDefault();
    if (items === 0 || items < 0) {
      alert("items must more than 1");
    } else {
      // let pri = parseInt(Price) * items;
      let poda = {
        Book_name,
        Person_id: aa,
        Book_id,
        Book_price: Price,
        items,
        Image,
      };
      console.log("poda", poda);
      axios.post("http://localhost:2000/cart", poda);
    }
  };
  return (
    <div>
      <section class="section product-detail">
        <div class="details container-md">
          <div class="left">
            <div class="main">
              <Img item={Image} width="2px"></Img>
            </div>
            
          </div>
          <div class="right">
            <h1>{Book_name}</h1>
            <div>Author : {Author_name}</div>
            <div>Availability : In stock</div>
            <div class="price">₹{Price}</div>
            <form class="form">
              <input
                type="text"
                placeholder="1"
                onChange={(e) => {
                  setitems(e.target.value);
                }}
              />
              {/* <a href="cart.html" class="addCart"> */}
              <button onClick={datapost}>Add To Cart</button>
              {/* </a> */}
            </form>
            <h3>Product Detail</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>{" "}
            <p>
              {" "}
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- Related --> */}
      {/* <section class="section featured">
        <div class="top container">
          <h1>Related Products</h1>
          <a href="academics.html" class="view-more">
            View more
          </a>
        </div>

        <div class="product-center container">
          <div class="product">
            <div class="product-header">
              <img src="./pics/Academic/Computer architecture.png" alt="" />
              <ul class="icons">
                <span>
                  <i class="bx bx-cart"></i>
                </span>
                <span>
                  <i class="bx bx-search"></i>
                </span>
              </ul>
            </div>
            <div class="product-footer">
              <a href="#">
                <h3>Boy’s T-Shirt</h3>
              </a>
              <div class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bx-star"></i>
              </div>
              <h4 class="price">$50</h4>
            </div>
          </div>
          <div class="product">
            <div class="product-header">
              <img src="./pics/Academic/Computer network.png" alt="" />

              <ul class="icons">
                <span>
                  <i class="bx bx-cart"></i>
                </span>
                <span>
                  <i class="bx bx-search"></i>
                </span>
              </ul>
            </div>
            <div class="product-footer">
              <a href="#">
                <h3>Boy’s T-Shirt</h3>
              </a>
              <div class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bx-star"></i>
              </div>
              <h4 class="price">$50</h4>
            </div>
          </div>
          <div class="product">
            <div class="product-header">
              <img src="./pics/Academic/Computer programming.jpg" alt="" />

              <ul class="icons">
                <span>
                  <i class="bx bx-c9art"></i>
                </span>
                <span>
                  <i class="bx bx-search"></i>
                </span>
              </ul>
            </div>
            <div class="product-footer">
              <a href="#">
                <h3>Boy’s T-Shirt</h3>
              </a>
              <div class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bx-star"></i>
              </div>
              <h4 class="price">$50</h4>
            </div>
          </div>
          <div class="product">
            <div class="product-header">
              <img src="./pics/Academic/Data warehouse.jpg" alt="" />

              <ul class="icons">
                <span>
                  <i class="bx bx-cart"></i>
                </span>
                <span>
                  <i class="bx bx-search"></i>
                </span>
              </ul>
            </div>
            <div class="product-footer">
              <a href="#">
                <h3>Boy’s T-Shirt</h3>
              </a>
              <div class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bx-star"></i>
              </div>
              <h4 class="price">$50</h4>
            </div>
          </div>
        </div>
  </section> */}
    </div>
  );
}

export default Detail;
