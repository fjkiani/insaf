import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '@sanity/client';

//Set up a Sanity client once and use it anywhere in the application 

export const client = sanityClient({ 
  projectId: 'eq12usms', //so Sanity knows which project to connect to 
  dataset: 'production', //determine whether we are in production or development 
  apiVersion: '2022-03-10', 
  useCdn: true, //CDN destributed 
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);   //for using Sanity images by passing the client 
export const urlFor = (source) => builder.image(source);  //Sanity giving us access to the URL where images are stored 