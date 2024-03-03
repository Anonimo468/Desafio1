import React from 'react';

const BookModal = ({ showModal, closeModal, selectedProduct }) => {
  return (
    <>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="icon-close" onClick={closeModal} >&times;</span>
            <h2>{selectedProduct.title}</h2>
            <p>Precio: ${selectedProduct.price}</p>
            <p>Descripción: {selectedProduct.description}</p>
            
            {/* Puedes agregar más detalles del producto aquí */}
          </div>
        </div>
      )}
      <style jsx>{`
        .modal {
          display: flex;
          align-items: center;
          justify-content: center;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1000;
        }
        
        .modal-content {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          max-width: 80%;
          max-height: 80%;
          overflow: auto;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        }
        
        .close {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 24px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default BookModal;
