import React, { useState } from 'react';
import BookModal from './Show';
import { data } from '../app/data';

export const ProductList = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const onAddProduct = (product) => {
    if (allProducts.find(item => item.id === product.id)) {
      const products = allProducts.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      setAllProducts([...products]);
    } else {
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      setAllProducts([...allProducts, product]);
    }
    openModal(product); // Abre el modal después de agregar el producto
  };

  return (
    <div className='container-items'>
      {data.map(product => (
        <div className='item' key={product.id}>
          <figure onClick={() => onAddProduct(product)}>
            <img src={product.urlImage} alt={product.title} />
          </figure>
          <div className='info-product'>
            <h2>{product.nameProduct}</h2>
            <p className='price'>${product.price}</p>
            <button className="Comp"  onClick={() => onAddProduct(product)}>Añadir al carrito</button>
          </div>
        </div>
      ))}
      <BookModal
        showModal={showModal}
        closeModal={closeModal}
        selectedProduct={selectedProduct}
      />
    </div>
  );
};
