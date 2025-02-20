import productContext from "./productContext";
import React, { useState, useEffect } from 'react'
import axios from "axios"

const ProductProvider = ({children}) => {
  const [product,setProduct] = useState([])

  const createProduct = async (newproduct)=>{
    if(!newproduct.name || !newproduct.price || !newproduct.image){
      return {success:false,message:"Please Provide all the field values"}
    }
    const res = await axios.post("/product", newproduct,{
      headers:{
        "Content-Type":"application/json",
      },
    });
    setProduct((prev)=>[...prev,newproduct])
    return {success:true,message:res.data.message}
  }

  const getProducts = async()=>{
    const res = await axios.get("/product");
    setProduct(res.data)
  }

  const deleteProduct = async(id)=>{
    console.log(id)
    const res = await axios.delete(`/product/${id}`);
    setProduct((prev)=> prev.filter((prod)=>prod._id!==id));
    return {success:true,message:res.data.message} 
  }

  


  return (
    <productContext.Provider value={{product,deleteProduct,getProducts,setProduct,createProduct}}>
      {children}
    </productContext.Provider>
  )
}

export default ProductProvider;

