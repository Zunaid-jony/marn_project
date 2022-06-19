const express = require("express")
const { getAllProducts,createProduct } = require("../controllers/productController")
const router = express.Router()

router.route("/products").get(getAllProducts)

//product modal
router.route("/product/new").post(createProduct)


 module.exports = router