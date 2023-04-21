const fs = require('fs');

class ProductManager{
    constructor (){
        this.path = "./src/db/Products.txt";
    }
    async getProductos(){
        const products = await fs.promises.readFile(this.path,"utf8");
        return JSON.parse(products);
    }
    async updateProduct(productData){
        let products = await this.getProductos();
        const index = products.findIndex(p=>p.id === productData.id);
        if(index === -1){
            return null;
        }
        products[index].title = productData.title;
        products[index].desc = productData.desc;
        products[index].price = productData.price;
        products[index].thumbnail = productData.thumbnail;
        products[index].stock = productData.stock;

        this.addProductsToFile(JSON.stringify(products));
        return true;
    }
    async addProduct(product){
        try{
            let products = await this.getProductos();
            const newProduct = {
                id: 0,
                title: product.title,
                desc: product.desc,
                price: product.price,
                thumbnail: product.thumbnail,
                stock: product.stock
            }
            if(products.length === 0){
                newProduct.id = 1;
            }else{
                newProduct.id = products[products.length - 1].id+1;
            }
            products.push(newProduct);
            this.addProductsToFile(JSON.stringify(products));
            return true;
        }catch(e){
            console.log(e.message);
            return false;
        }
    }
    async deleteProductById(id){
        try{
            const products = await this.getProductos();
            const productsFilter = products.filter(product => product.id != id);
            this.addProductsToFile(JSON.stringify(productsFilter));
            return true;
        }catch(e){
            console.log(e);
            return false;
        }
    }
    async getProductById(id){
        const products = await this.getProductos();
        const product = products.find(p => p.id === id);
        console.log(product);
        if(product){
            return product;
        }else{
            return null;
        }
    }
    addProductsToFile(products){
        try{
            fs.writeFile(this.path, products,(err)=>{
                console.log(err);
            });
        }catch(e){
            console.log("Error al escribir el archivo: " + e.message);
        }
    }
}

module.exports = ProductManager;