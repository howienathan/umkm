import React from "react";

const ProductCard = ({ image, title, price, description }) => {
  return (
    <div className=" text-white rounded-md border border-yellow-500 p-6 text-center flex flex-col items-center">
      <img src={image} alt={title} className="mb-4 w-full h-64 rounded-lg" />
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-yellow-400 text-xl font-bold mt-2">{price}</p>
      <p className="text-sm mt-4">{description}</p>
    </div>
  );
};

const ProductList = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-6 p-6 ">
      <ProductCard
        image="https://i.scdn.co/image/ab67616d00001e02b1bd0ba0d1e07ead9646d7f1"
        title="Sate Ayam"
        price="Rp 69.000"
        description="Nikmati kelezatan sate ayam, salah satu kuliner kebanggaan Indonesia yang memadukan daging ayam empuk dengan bumbu khas."
      />
      <ProductCard
        image="https://i.scdn.co/image/ab67616d00001e02b1bd0ba0d1e07ead9646d7f1"
        title="Sate Ayam"
        price="Rp 69.000"
        description="Nikmati kelezatan sate ayam, salah satu kuliner kebanggaan Indonesia yang memadukan daging ayam empuk dengan bumbu khas."
      />
      <ProductCard
        image="https://i.scdn.co/image/ab67616d00001e02b1bd0ba0d1e07ead9646d7f1"
        title="Sate Ayam"
        price="Rp 69.000"
        description="Nikmati kelezatan sate ayam, salah satu kuliner kebanggaan Indonesia yang memadukan daging ayam empuk dengan bumbu khas."
      />
    </div>
    
  );
};

export default ProductList;
