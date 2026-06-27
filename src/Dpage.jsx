import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Dpage() {
  const { id } = useParams();

  const [dp, setdp] = useState(null);
  const [count, setcount] = useState(1);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setdp(data));
  }, [id]);

  const incr = () => setcount((prev) => prev + 1);
  const dcri = () => setcount((prev) => (prev > 1 ? prev - 1 : 1));

  const addToCart = () => {
    if (!dp) return;

    let existingCartRaw;
    try {
      existingCartRaw = JSON.parse(localStorage.getItem('cart'));
    } catch (e) {
      existingCartRaw = null;
    }

    const existingCart = Array.isArray(existingCartRaw) ? existingCartRaw : [];

    const existing = existingCart.find((it) => it.id === dp.id);

    if (existing) {
      existing.quantity = (existing.quantity ?? 0) + count;
    } else {
      existingCart.push({ ...dp, quantity: count });
    }

    localStorage.setItem('cart', JSON.stringify(existingCart));
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex justify-center items-center p-6 text-white">
      {dp && (
        <div className="bg-zinc-900 rounded-2xl p-8 max-w-5xl w-full flex flex-col md:flex-row gap-10">
          <div className="flex-1 flex justify-center items-center bg-white rounded-xl p-6">
            <img src={dp.image} alt={dp.title} className="h-80 object-contain" />
          </div>

          <div className="flex-1 space-y-5">
            <h1 className="text-2xl font-bold">{dp.title}</h1>

            <p className="text-3xl font-bold text-green-400">${dp.price ? dp.price.toFixed(2) : '0.00'}</p>

            <p className="text-zinc-400">{dp.description}</p>

            <div className="flex items-center gap-4">
              <button onClick={dcri} className="w-10 h-10 bg-red-600 rounded">
                -
              </button>

              <input value={count} readOnly className="w-16 text-center bg-zinc-800 rounded py-2" />

              <button onClick={incr} className="w-10 h-10 bg-green-600 rounded">
                +
              </button>
            </div>

            <Link to="/cart">
              <button onClick={addToCart} className="bg-blue-600 px-6 py-3 rounded-xl">
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
