const {Router} = require("express");
const { productsControllers } = require("../controllers/productsControllers");
const router = Router();

router.post("/",productsControllers.addProduct);
router.put("/",productsControllers.updateProduct);
router.get("/",productsControllers.getProducts);
router.get("/:id",productsControllers.getProductById);
router.delete("/",productsControllers.deleteProduct);

module.exports = router;