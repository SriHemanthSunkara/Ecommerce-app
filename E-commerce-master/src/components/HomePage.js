import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import Products from './Products';
import SelectVariants from './SelectVariants';
import Banner from './Banner';
import Contact from './Contact';

function HomePage() {
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const promise = axios.get('https://fakestoreapi.com/products');
    promise.then((response) => {
      setProducts(response.data);
      setDisplayProducts(response.data);
      setIsLoading(false);
    });
  }, []);

  const categories = products.reduce(
    (value, product) => {
      if (!value.includes(product.category)) {
        value.push(product.category);
      }

      return value;
    },
    ['all']
  );

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Navbar />
          <br></br>
          <br></br>
          <Banner />

          <div
            style={{
              textAlign: 'center',
              marginBottom: '2rem',
              marginTop: '2rem',
            }}
          >
            <h2>our Products</h2>
            <div
              style={{
                width: '5rem',
                height: '0.25rem',
                background: '#c59d5f',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            ></div>
          </div>

          <div
            style={{
              marginLeft: '7rem',
              marginTop: '2rem',
            }}
          >
            <SelectVariants
              categoryObj={categories}
              setDisplayProducts={setDisplayProducts}
              products={products}
            />
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gridColumnGap: '0rem',
                gridRowGap: '2rem',
              }}
            >
              {displayProducts.map((product) => {
                return <Products productObj={product} />;
              })}
            </div>
          </div>
        </>
      )}
      <Contact />
    </div>
  );
}

export default HomePage;
