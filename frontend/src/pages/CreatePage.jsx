
import React, { useState,useContext } from 'react'
import productContext from '../context/productContext';

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({ name: '', price: '', image: '' });
  const {createProduct,product} = useContext(productContext);

  const handleAddProduct = async () => {
    const resp = await createProduct(newProduct)
    if(!resp.success){
        return alert(resp.message);
    }
    return alert(resp.message)
  };

  return (
    <div
      style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '24px',
        color: 'white'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '40px'
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            fontSize: '3em',
            marginBottom: '40px'
          }}
        >
          Create New Product
        </h1>
        <div
          style={{
            width: '100%',
            padding: '32px',
            borderRadius: '12px',
            boxShadow: '0 6px 8px rgba(0,0,0,0.15)',
            backgroundColor: '#333'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}
          >
            <input
              type="text"
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ccc',
                borderRadius: '6px',
                backgroundColor: '#555',
                color: 'white',
                fontSize: '1.2em'
              }}
            />
            <input
              type="text"
              placeholder="Product Price"
              name="price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ccc',
                borderRadius: '6px',
                backgroundColor: '#555',
                color: 'white',
                fontSize: '1.2em'
              }}
            />
            <input
              type="text"
              placeholder="Product Image"
              name="image"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ccc',
                borderRadius: '6px',
                backgroundColor: '#555',
                color: 'white',
                fontSize: '1.2em'
              }}
            />
            <button
              onClick={handleAddProduct}
              style={{
                width: '100%',
                padding: '14px',
                backgroundColor: '#3182ce',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '1.2em'
              }}
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage
