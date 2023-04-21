const {Router} = require("express");
const { cartsControllers } = require("../controllers/cartsControllers");
const router = Router();

router.post("/",cartsControllers.addCart);
router.put("/",cartsControllers.updateCart);
router.get("/",cartsControllers.getCarts);
router.get("/:id",cartsControllers.getCartById);
router.delete("/",cartsControllers.deleteCart);

module.exports = router;