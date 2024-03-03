"use client"
import { useState } from 'react';
import { Headers } from '../components/Headers';
import { ProductList } from '../components/ProductList';

import { useEffect } from 'react';



export default function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  function MyComponent() {
    useEffect(() => {
      // El código aquí se ejecutará después de *cada* renderizado
    });
    return <div />;
  }




  return (
    <>
      <Headers
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <ProductList
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
    </>
  );
}
