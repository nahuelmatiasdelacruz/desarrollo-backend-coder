const ProductManager = require("../models/ProductManager");
const products = new ProductManager();

const getProducts = async (req,res)=>{
    const productos = await products.getProductos();
    if(req.query.limit){
        const limitedProducts = productos.slice(0,parseInt(req.query.limit));
        res.json({limitedProducts});
    }else{
        res.json({productos});
    }
}

const getProductById = async (req,res)=>{
    const producto = await products.getProductById(parseInt(req.params.id));
    if(producto){
        res.json({producto});
    }else{
        res.json({success: false, message: "Producto no encontrado"});
    }
}

module.exports = {getProducts,getProductById}