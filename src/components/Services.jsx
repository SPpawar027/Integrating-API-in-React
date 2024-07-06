import React, { useEffect, useState } from 'react';
import axios from '../util/Axios.jsx';

export const Services = () => {
  const [products, setproducts] = useState([]);
  const getproducts = () => {
    const api = '/products';
    axios
      .get(api)
      .then((product) => {
        setproducts(product.data);
      })
      .catch((err) => console.log(err));
  };

  const addproducts = () => {
    const api = '/products';
    axios
      .post(api, {
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
      })
      .then((receive) => {
        console.log(receive);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    return getproducts();
  }, []);

  return (
    <>
      <div className="bg-zinc-300 w-full h-full">
        {/* <button
          onClick={addproducts}
          className="rounded-md font-semibold text-white italic  px-5 py-3 bg-orange-500 mt-5 ml-5"
        >
          Add products in api
        </button> */}

        <hr className="text-black mt-10 bg-black h-0.5 m-10" />
        {/* <button
          onClick={getproducts}
          className="rounded-md font-semibold text-white italic  px-5 py-3 bg-orange-500 mt-5 ml-5"
        >
          call api
        </button> */}

        <ul className="flex flex-col gap-3 mt-10 ml-5">
          {products.length > 0 ? (
            products.map((p, index) => (
              <li
                key={index}
                className="px-8 py-4 font-semibold text-lg bg-orange-300"
              >
                {p.title}
              </li>
            ))
          ) : (
            <h1 className="h-screen bg-zinc-300">Loading .....</h1>
          )}
        </ul>
      </div>
    </>
  );
};
