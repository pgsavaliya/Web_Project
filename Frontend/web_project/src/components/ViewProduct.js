import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../contexts/CartContext';
import './ViewProduct.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart(); 
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:2300/v1/user/product/getByIdProduct?_id=${id}`);
        setProduct(response.data.data);
        setLoading(false);
      } catch (error) {
        setError('Product not found');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate('/ProductCart');
  };

  return (
    <div className="product-detail">
      {product && (
        <>
          <img src={product.image} alt={product.name} className="product-detail-image" />
          <div className="product-detail-content">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p><b>Price: ${(product.price * quantity).toFixed(2)}</b></p>

            {/* Quantity Control */}
            <div className="quantity-control">
              <button onClick={decreaseQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={increaseQuantity}>+</button>
            </div>

            {/* Buttons */}
            <div className="product-buttons">
              <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
              <button className="back-button" onClick={() => navigate(-1)}>Back</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
