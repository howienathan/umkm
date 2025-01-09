import React from "react";

const ProductCard = ({ image, title, price, description }) => {
  return (
    <div className=" text-white rounded-md border border-yellow-500 p-6 text-center flex flex-col items-center">
      <img src={image} alt={title} className="mb-4 w-20 h-20" />
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
        image="https://img.kurio.network/LLKB4CCxkEN646xXdzVuaLgbk8Q=/1200x1200/filters:quality(80)/https://kurio-img.kurioapps.com/24/04/05/c86c4b68-04e1-4d66-9d85-6903003bb6a8.jpg"
        title="Sate Ayam"
        price="Rp 69.000"
        description="Nikmati kelezatan sate ayam, salah satu kuliner kebanggaan Indonesia yang memadukan daging ayam empuk dengan bumbu khas."
      />
      <ProductCard
        image="https://img.kurio.network/LLKB4CCxkEN646xXdzVuaLgbk8Q=/1200x1200/filters:quality(80)/https://kurio-img.kurioapps.com/24/04/05/c86c4b68-04e1-4d66-9d85-6903003bb6a8.jpg"
        title="Sate Ayam"
        price="Rp 69.000"
        description="Nikmati kelezatan sate ayam, salah satu kuliner kebanggaan Indonesia yang memadukan daging ayam empuk dengan bumbu khas."
      />
      <ProductCard
        image="https://img.kurio.network/LLKB4CCxkEN646xXdzVuaLgbk8Q=/1200x1200/filters:quality(80)/https://kurio-img.kurioapps.com/24/04/05/c86c4b68-04e1-4d66-9d85-6903003bb6a8.jpg"
        title="Sate Ayam"
        price="Rp 69.000"
        description="Nikmati kelezatan sate ayam, salah satu kuliner kebanggaan Indonesia yang memadukan daging ayam empuk dengan bumbu khas."
      />
    </div>
  );
};

export default ProductList;
