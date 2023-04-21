const fs = require('fs');

class CartManager{
    constructor(){
        this.path = "./src/db/Carts.txt";
    }
    async getCartDataById(id){
        const carts = JSON.parse(await fs.promises.readFile(this.path,"utf8"));
        const selectedCart = carts.find(cart=>cart.id === id);
        return selectedCart;
    }
    async addProductToCart(product,cartId){
        const carts = JSON.parse(await fs.promises.readFile(this.path,"utf8"));
        const selectedCart = carts.find(cart=>cart.id === cartId);
    }
}