import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Iphones() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/iphone.json"); //http://localhost:1010/iphones
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        setProducts(data.bre);
      } catch (error) {
        console.error('Fetch error:', error);
        alert('An error occurred while fetching iPhone products.');
      }
    };

    fetchData();
  }, []);

  console.log(products)


  return (
    <div className="container mt-5 mb-5">
      <br />
      <h1 className="mb-4 text-center">iPhones</h1>
      <h3 className="mb-4 text-center">The best for the brightest.</h3>

      {products.map(product => (
        <div key={product.product_id} className="row mb-4">
          <div className="col-md-6 order-md-1">
            <div className="card h-100">
              <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="h1 text-center">{product.product_name}</h5>
                <p className="card-text text-center">
                   {product.product_description} <br />
                  Starting Price: ${product.starting_price}<br />
                  Price Range: {product.price_range}<br />
                </p>
              <div className=" text-center card-footer bg-transparent border-top-0">
              <Link to={`/iphones/${product.product_url}`} className="w-100">Learn More </Link>
            </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 order-md-2 d-none d-md-block">
            <img src={product.product_img} alt={product.product_name} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
          </div>
        </div>
      ))}

    </div>
  );
}

export default Iphones;