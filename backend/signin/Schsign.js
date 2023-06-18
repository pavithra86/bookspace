const express = require("express");
const mongoose = require("mongoose");


const sign = mongoose.Schema({
  
  name:{
      type:String,
      required:true
  },
  email: {
    type: String,
    required:true
  },
  pass: {
    type: String,
    required:true
  },
  phone: {
    type: Number,
    required:true
  },
});



module.exports = mongoose.model("sign", sign);
