import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div
      style={{
        maxWidth: '1140px',
        margin: '0 auto',
        padding: '0 16px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '64px',
          backgroundColor: '#333',
          padding: '0 24px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Link
          to="/"
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Product Store
        </Link>

        <Link
          to="/create"
          style={{
            padding: '10px 20px',
            fontSize: '18px',
            color: 'white',
            backgroundColor: '#007bff',
            borderRadius: '6px',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 5px rgba(0, 123, 255, 0.3)',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
        >
          + Add Product
        </Link>
      </div>
    </div>
  );
};


export default Navbar
