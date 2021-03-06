const express = require("express")
const { getAllProducts,createProduct, updateProduct, deleteProduct, getProductDetails } = require("../controllers/productController")
const router = express.Router()

router.route("/products").get(getAllProducts)

//product modal
router.route("/product/new").post(createProduct)



router.route("/product/:id").put(updateProduct)
router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails)


 module.exports = router