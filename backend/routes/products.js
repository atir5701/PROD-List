const express = require("express")

const router = express.Router()
const {addProducts, deleteProduct,updateProduct,getProducts} = require("../controller/products")

router.post("/",addProducts)

router.get("",getProducts)

router.delete("/:id",deleteProduct)

router.patch("/:id",updateProduct)  


module.exports = router;