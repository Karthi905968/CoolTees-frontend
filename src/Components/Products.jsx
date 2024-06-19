import React from 'react';
import { useSelector } from 'react-redux';

const Products = () => {
  const products = useSelector(state => state.items);
  return (
    <>
     {products.length > 0 ? (
  Array.isArray(products) && products.map(product => (
    <section className="cGroup" key={product.id}>
      <div className="heart" style={{background:'#FF0000'}}>
        <i className="far fa-heart" style={{ color: 'white' }}></i>
      </div>
      <main className="photo">
        <img
          src={product.image}
          alt={product.name}
          width="100%"
        />
      </main>
      <main className="bottom">
        <p className="b-para">
          {product.name} <br />
          <span className="price">${product.price}</span>
        </p>
        <button className="b-button">ADD TO CART</button>
      </main>
    </section>
  ))
) : (
  <h2>Loading....</h2>
)}

    </>
  );
};

export default Products;
