import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Product2() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  const addtocart = (photo) => {
    let crntdataRaw;
    try {
      crntdataRaw = JSON.parse(localStorage.getItem('cart'));
    } catch (e) {
      crntdataRaw = null;
    }

    const crntdata = Array.isArray(crntdataRaw) ? crntdataRaw : [];

    const exstdata = crntdata.find((it) => it.id === photo.id);

    if (exstdata) {
      exstdata.quantity = (exstdata.quantity ?? 0) + 1;
    } else {
      crntdata.push({ ...photo, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(crntdata));

    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-black p-10 flex flex-col justify-center items-center">
      <h1 className="text-white text-2xl mb-6">PRODUCT PAGE 2</h1>
      <ul className="flex flex-wrap justify-center gap-8">
        {data.map((photo) => (
          <li
            key={photo.id}
            className="flex flex-col w-[240px] bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 hover:scale-105 transition-all duration-300"
          >
            <Link to={`/product/${photo.id}`} className="flex flex-col h-full gap-4">
              {/* Image Box */}
              <div className="bg-white rounded-xl p-4 flex items-center justify-center h-[180px]">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Title */}
              <p className="text-white text-sm font-medium line-clamp-2 min-h-[40px]">
                {photo.title}
              </p>

              {/* Price */}
              <p className="text-green-400 font-bold text-lg">${photo.price ? photo.price.toFixed(2) : '0.00'}</p>
            </Link>

            <button
              onClick={() => addtocart(photo)}
              className="w-full mt-3 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 active:scale-95 transition"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
