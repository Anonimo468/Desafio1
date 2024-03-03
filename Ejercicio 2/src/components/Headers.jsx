"use client"
import { useState } from 'react';

export const Headers = ({
    allProducts,
    setAllProducts,
    total,
    countProducts,
    setCountProducts,
    setTotal,
}) => {
    const [active, setActive] = useState(false);

    const onDeleteProduct = product => {
        alert("¿Quieres eliminar este producto?");
        const results = allProducts.filter(item => item.id !== product.id);
        setTotal(total - product.price * product.quantity);
        setCountProducts(countProducts - product.quantity);
        setAllProducts(results);
    };

    const onChangeQuantity = (event, product) => {
        const newQuantity = parseInt(event.target.value);
        const updatedProducts = allProducts.map(item => {
            if (item.id === product.id) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        const newTotal = updatedProducts.reduce(
            (acc, curr) => acc + curr.price * curr.quantity,
            0
        );
        const newCount = updatedProducts.reduce(
            (acc, curr) => acc + curr.quantity,
            0
        );
        setTotal(newTotal);
        setCountProducts(newCount);
        setAllProducts(updatedProducts);
    };

    const onCleanCart = () => {
        alert("¿Realmente quieres vaciar el carrito?");
        setAllProducts([]);
        setTotal(0);
        setCountProducts(0);
    };

    return (
        <header>
            <h1>Almacene Super Mario</h1>
            <div className='container-icon'>
                <div
                    className='container-cart-icon'
                    onClick={() => setActive(!active)}
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
                        alt="carrito"
                        className="icon-cart"
                    />
                    <div className='count-products'>
                        <span id='contador-productos'>{countProducts}</span>
                    </div>
                </div>
                <div className={`container-cart-products ${active ? '' : 'hidden-cart'}`}>
                    {allProducts.length ? (
                        <>
                            <div className='row-product'>
                                {allProducts.map(product => (
                                    <div className='cart-product' key={product.id}>
                                        <div className='info-cart-product'>
                                            <p className='titulo-producto-carrito'>{product.title}</p>
                                            <span className='precio-producto-carrito'>${product.price}</span>
                                            <img src={product.urlImage} height={80} />
                                            <img
                                                src="https://static.vecteezy.com/system/resources/previews/018/887/462/original/signs-close-icon-png.png"
                                                alt="cerrar"
                                                className="icon-close"
                                                onClick={() => onDeleteProduct(product)}
                                            />
                                        </div>
                                        <div style={{ marginTop: '110px' }}> {/* Contenedor con margen superior */}
                                            <input
                                                type="number"
                                                value={product.quantity}
                                                onChange={(event) => onChangeQuantity(event, product)}
                                                min="1"
                                                style={{ width: '60px', fontSize: '18px', height:'30px' }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='cart-total'>
                                <h3>Total:</h3>
                                <span className='total-pagar'>${total}</span>
                            </div>
                            <button className='btn-clear-all' onClick={onCleanCart}>
                                Vaciar Carrito
                            </button>
                        </>
                    ) : (
                        <p className='cart-empty'>El carrito está vacío</p>
                    )}
                </div>
            </div>
        </header>
    );
};
