import React, { useState } from 'react';
import products from '../data/products';
import Product from './Product';
import './Products.css';

const Products = ({ addToCart }) => {
    const productsPerPage = 25; // Display 25 products per page
    const totalPages = Math.ceil(products.length / productsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            <h2>Our Products</h2>
            <div className="product-grid">
                {currentProducts.map(product => (
                    <Product key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
            <div className="pagination">
                <button onClick={prevPage} disabled={currentPage === 1}>Prev</button>
                <span>{currentPage} of {totalPages}</span>
                <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    );
}

export default Products;
