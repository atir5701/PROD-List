import React from 'react'
import productContext from '../context/productContext'
import { useContext } from 'react'
import {Link} from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { useEffect } from 'react'

const HomePage = () => {
  const { product, getProducts } = useContext(productContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '48px 16px',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '32px',
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'center',
          marginBottom: '24px',
        }}
      >
        Current Products
      </h1>

      {product.length === 0 ? (
        <p style={{ color: 'gray', fontSize: '18px' }}>No products available</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '32px',
            justifyContent: 'center',
          }}
        >
          {product.map((prod) => (
            <ProductCard key={prod._id} product={prod} />
          ))}
        </div>
      )}
    </div>
  );
};


export default HomePage
