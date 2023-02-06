import React from 'react';
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => (
  <div>
    {/* <HeroBanner heroBanner={bannerData.length && bannerData[0]}  /> */}
    {/* {console.log(bannerData)} */}
    <div className="products-heading">
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>
  </div>
);

export const getServerSideProps = async () => { //utilze this function when fetching from an API or CMS 
  const query = '*[_type == "product"]'; //grab all products from product dashboard 
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]'; //fetch everything where type is equal to banner 
  const bannerData = await client.fetch(bannerQuery);

  return { 
    props: { products, bannerData }
  }
}

export default Home;
