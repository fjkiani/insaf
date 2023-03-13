import React from 'react';
import { client } from '../lib/client'; // import Sanity client 
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products }) => (   //anything getServerSideProps returns, gets populated into this function  
  <div>
    {/* {console.log(products)} */}
    <div className="products-heading">
    </div>

    <div className="products-container"> 
      {products?.map((product) => <Product key={product._id} product={product} />)}  
    </div>
  </div>
);

export const getServerSideProps = async () => { //utilze this function when fetching from an API or CMS 
  const query = '*[_type == "product"]'; //Sanity query to grab all products from product dashboard 
  const products = await client.fetch(query); // pass the query 

  return { 
    props: { products } // pass the products data
  }
}

export default Home;
