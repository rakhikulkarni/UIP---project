import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          {product.item}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
