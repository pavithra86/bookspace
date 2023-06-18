import React, { useEffect, useState } from "react";
import "../App.css";
import Img from "../image";
import axios from "axios";
import Alldetialhook from "../Hooks/Alldetial.hook";
import { Link } from "react-router-dom";
// import "./add"
function Firstpage() {
  //   const [datas, setdatas] = useState([]);
  //   const [fic, setfic] = useState([]);
  //   const [nonfic, setnonfic] = useState([]);
  //   const [acc, setacc] = useState([]);
  const { isLoading, data, isError, error } = Alldetialhook();
  // console.log("dataqqqqqqqqqqqqqqqqqqqqqqq", data);
  //   useEffect(async () => {
  //     var ficdata = await axios.get("http://localhost:2000/detail");
  //     console.log("datassssss!!!!!", ficdata.data);
  //     setdatas(ficdata.data);
  //
  //   }, []);

  if (isLoading) {
    return <h1>Loading!!!!!!!!</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  let fic = data.data.filter((d) => d.category_Id == "fiction");
  // console.log("fiction!!!!!!!", fi);
  // setfic(fi);
  let nonfic = data.data.filter((d) => d.category_Id == "Non fiction");
  // console.log("Non fiction!!!!!!!", nonfi);
  // setnonfic(nonfi);
  let acc = data.data.filter((d) => d.category_Id == "Academic");
  // console.log("Academic!!!!!!!", aca);
  // setacc(aca);

  if (fic.length !== 0) {
    var arrfi = [];
    for (let i = 0; i < 4; i++) {
      arrfi.push(fic[i]);
    }
    // console.log("paviiiiiiiiii!!!!!!!", arrfi);
    var fict = arrfi.map((p) => (
      <Link to={`/detail/${p._id}`}>
        <div class="product">
          <div class="product-header">
            <Img item={p.Image} width="2px" />
            <ul class="icos">
              <span>
                <i class="bx bx-heart"> </i>{" "}
              </span>{" "}
              <span>
                <i class="bx bx-cart"> </i>{" "}
              </span>{" "}
            </ul>{" "}
          </div>{" "}
          <div class="product-footer">
            <a href="#">
              <h3> {p.Book_name} </h3> <h4> {p.Author_name} </h4>{" "}
            </a>{" "}
            <h4 class="price"> {p.Price} </h4>{" "}
          </div>{" "}
        </div>
      </Link>
    ));
  }

  if (nonfic.length !== 0) {
    var arrfi = [];
    for (let i = 0; i < 4; i++) {
      arrfi.push(nonfic[i]);
    }
    // console.log("paviiiiiiiiii!!!!!!!", arrfi);
    var non_fict = arrfi.map((p) => (
      <Link to={`/detail/${p._id}`}>
        <div class="product">
          <div class="product-header">
            <Img item={p.Image} width="2px" />
             <ul class="icos">
              <span>
                <i class="bx bx-heart"> </i>{" "}
              </span>{" "}
              <span>
                <i class="bx bx-cart"> </i>{" "}
              </span>{" "}
            </ul>{" "}
          </div>{" "}
          <div class="product-footer">
            <a href="#">
              <h3> {p.Book_name} </h3> <h4> {p.Author_name} </h4>{" "}
            </a>{" "}
            <h4 class="price"> {p.Price} </h4>{" "}
          </div>{" "}
        </div>
      </Link>
    ));
  }

  if (acc.length !== 0) {
    var arrfi = [];
    for (let i = 0; i < 4; i++) {
      arrfi.push(acc[i]);
    }
    // console.log("paviiiiiiiiii!!!!!!!", arrfi);
    var acad = arrfi.map((p) => (
      <Link to={`/detail/${p._id}`}>
        <div class="product">
          <div class="product-header">
            <Img item={p.Image} width="2px" />
            <ul class="icos">
              <span>
                <i class="bx bx-heart"> </i>{" "}
              </span>{" "}
              <span>
                <i class="bx bx-cart"> </i>{" "}
              </span>{" "}
            </ul>{" "}
          </div>{" "}
          <div class="product-footer">
            <a href="#">
              <h3> {p.Book_name} </h3> <h4> {p.Author_name} </h4>{" "}
            </a>{" "}
            <h4 class="price"> {p.Price} </h4>{" "}
          </div>{" "}
        </div>
      </Link>
    ));
  }

  return (
    <div>
      <header id="home" class="header">
       <Img  className="bookimg" item={"book1"} width="2px" />
        <div class="hero-content">
          <h2>
            <span class="discount"> 70 % </span> SALE OFF{" "}
          </h2>{" "}
          <h1>
            <span> Browse Our Stacks </span> <span> mode on </span>{" "}
          </h1>{" "}
          <a class="btn" href="#">
            shop now{" "}
          </a>{" "}
        </div>{" "}
        </header>
      {/* <!--Main--> */}
      <main>
        {" "}
        {/* <!--FICTIONAL--> */}{" "}
        <section class="section fictional">
          <div class="title">
            <h1> Fiction </h1>{" "}
          </div>
          <div class="product-center container"> {fict} </div>{" "}
          <div class="showall">
            <Link to="/Fictional"> Show all </Link>{" "}
          </div>{" "}
        </section>
        {/* <!--NON FICTIONAL--> */}
        <section class="section fictional">
          <div class="title">
            <h1> Non - Fiction </h1>{" "}
          </div>
          <div class="product-center container"> {non_fict} </div>{" "}
          <div class="showall">
            <Link to="/Non-Fictional"> Show all </Link>{" "}
          </div>{" "}
        </section>
        {/* <!-- Academics--> */}
        <section class="section fictional">
          <div class="title">
            <h1> ACADEMIC </h1>{" "}
          </div>
          <div class="product-center container"> {acad} </div>{" "}
          <div class="showall">
            <Link to="/Academics"> Show all </Link>{" "}
          </div>{" "}
        </section>{" "}
      </main>
    </div>
  );
}

export default Firstpage;
