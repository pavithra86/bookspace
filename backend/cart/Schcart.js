const express = require("express");
const mongoose = require("mongoose");


const cart = mongoose.Schema({

    Book_name: {
        type: String,
        required: true,
    },
    Person_id: {
        type: String,
        required: true,
    },
    Book_id: {
        type: String,
        required: true
    },
    Book_price: {
        type: String,
        required: true
    },
    items: {
        type: Number,
        required: true
    },
    Image: {
        type: String,
        required: true
    }

});



module.exports = mongoose.model("cart", cart);