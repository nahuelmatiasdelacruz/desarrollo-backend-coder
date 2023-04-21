const ProductManager = require("../models/ProductManager")
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
        res.status(400).json({message: "Producto no encontrado"});
    }
}
const updateProduct = async (req,res)=>{
    const success = await products.updateProduct(req.body);
    if(!success){
        return res.status(400).json({message: "Producto no encontrado"});
    }else{
        return res.status(200).json({message: "Se ha actualizado el producto con exito"});
    }
}
const addProduct = async (req,res)=>{
    const success = await products.addProduct(req.body);
    if(!success){
        return res.status(500).json({message: "Hubo un error al agregar el producto"});
    }else{
        return res.status(200).json({message: "Se ha agregado el producto con exito"});
    }
}
const deleteProduct = async (req,res)=>{
    const success = await products.deleteProductById(req.body.id);
    if(!success){
        return res.status(500).json({message: "Hubo un error al borrar el producto"});
    }else{
        return res.status(200).json({message: "Se ha borrado el producto"});
    }
}

const productsControllers = {
    addProduct,
    updateProduct, 
    deleteProduct, 
    getProducts, 
    getProductById
}

module.exports = {productsControllers};