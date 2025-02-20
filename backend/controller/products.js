const Product = require("../models/product")


const getProducts = async(req,res)=>{
    const data = await Product.find();
    return res.json(data)
}

const addProducts = async(req,res)=>{
    const body = req.body;
    if(!body.name || !body.price || !body.image){
        return res.status(400).json({message: " Please fill all the fields"})
    }
    const entry = await Product.create({
        name:body.name,
        price:body.price,
        image:body.image
    })

    return res.status(200).json({message:"Product added succesfully"})

}

const deleteProduct = async(req,res)=>{
    const id = req.params.id
    const data = await Product.findByIdAndDelete(id);
    return res.status(200).json({message:"Product Deleted"})
}

const updateProduct = async(req,res)=>{
    const id = req.params.id;
    const prodct = req.body;
    try{
        await Product.findByIdAndUpdate(id,prodct,{new:true})

        return res.status(200).json({message:"Product updated successfully"})
    }catch(error){
        return res.status(400).json({message:"Product not found"})
    }

}

module.exports = {addProducts, deleteProduct,updateProduct,getProducts}