import React from 'react'
import productContext from '../context/productContext';
import { useContext } from 'react';

const ProductCard = ({ product }) => {
    const {deleteProduct} = useContext(productContext)

    const handleDeleteProduct = async(productid)=>{
      const resp = await deleteProduct(productid)
      if(resp.success){
        return alert(resp.message + "successfully")
      }
    }

    

    return (
      <div
        style={{
          boxShadow: '0 4px 8px rgba(255, 255, 255, 0.1)',
          borderRadius: '10px',
          overflow: 'hidden',
          backgroundColor: '#222', // Darker background for better contrast
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          padding: '20px',
          textAlign: 'center',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 10px 20px rgba(255, 255, 255, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'none';
          e.currentTarget.style.boxShadow = '0 4px 8px rgba(255, 255, 255, 0.1)';
        }}
      >
        <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', color: '#fff' }}>
          {product.name}
        </h3>
        <p style={{ fontWeight: 'bold', fontSize: '1.3rem', color: '#bbb', marginBottom: '16px' }}>
          ${product.price}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
          <button
            onClick={() => onOpen(product._id)}
            style={{
              padding: '10px 18px',
              borderRadius: '6px',
              cursor: 'pointer',
              backgroundColor: '#555',
              color: '#fff',
              border: 'none',
              transition: 'background 0.3s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#777')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#555')}
          >
            Edit
          </button>
          <button
            onClick={() => handleDeleteProduct(product._id)}
            style={{
              padding: '10px 18px',
              borderRadius: '6px',
              cursor: 'pointer',
              backgroundColor: '#b22222',
              color: '#fff',
              border: 'none',
              transition: 'background 0.3s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#ff4d4d')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#b22222')}
          >
            Delete
          </button>
        </div>

    
      </div>
    );
  };
  
  
export default ProductCard;