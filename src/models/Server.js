const express = require('express');
const { getProducts, getProductById } = require('../helpers/products');

class Server{
    constructor(){
        this.paths = {
            products: "/api/products",
            carts: "/api/carts"
        }
        this.app = express();
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        this.routes();
    }
    routes(){
        this.app.use(this.paths.products,require("../routes/products"));
        this.app.use(this.paths.carts,require("../routes/carts"));
    }
    listen(){
        this.app.listen(8080,()=>{
            console.log("Server ON! - Desafio: Servidor con express");
        })
    }
}

module.exports = Server;