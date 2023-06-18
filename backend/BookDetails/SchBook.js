const express = require("express");
const mongoose = require("mongoose");


const BOOK_detail = mongoose.Schema({
 
    Book_name:{
        type:String,
        required:true
    },
    Author_name:{
        type:String,
        required:true 
    },
    Price:{
        type:String,
        required:true 
    },
    Image:{
        type:String,
        required:true 
    },
    Book_Id:{
        type:String,
        required:true 
    },
    category_Id:{
        type:String,
        required:true
    }
 
});



module.exports = mongoose.model("detail", BOOK_detail);
