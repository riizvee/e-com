import React, { useEffect, useState } from 'react';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);


  useEffect(() => {
    let storedCartRaw;
    try {
      storedCartRaw = JSON.parse(localStorage.getItem('cart'));
    } catch (e) {
      storedCartRaw = null;
    }

    const storedCart = Array.isArray(storedCartRaw) ? storedCartRaw : [];

    // Ensure quantity is present on loaded items
    const normalized = storedCart.map((it) => ({ ...it, quantity: it.quantity ?? 1 }));

    setCartItems(normalized);
  }, []);

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);

    setCartItems(updatedCart);

    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  const increaseQuantity = (id) => {
    const updated = cartItems.map((it) =>
      it.id === id ? { ...it, quantity: (it.quantity ?? 0) + 1 } : it
    );

    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const decreaseQuantity = (id) => {
    const updated = cartItems
      .map((it) => (it.id === id ? { ...it, quantity: (it.quantity ?? 1) - 1 } : it))
      .filter((it) => it.quantity > 0);

    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };
  const total = cartItems.reduce(
    (sum, it) => sum + Number(it.price) * (it.quantity ?? 0),
    0
  );
 
  return (
    <div className="min-h-screen bg-black p-6">
      <h1 className="text-white text-3xl font-bold mb-6">Cart</h1>

      <ul className="flex flex-col gap-4">
        {cartItems.map((item, index) => (
          <li key={item.id} className="flex items-center gap-6 bg-gray-800 text-white p-4 rounded-lg">
            <img
              src={item.image}
              alt={item.title}
              className="h-28 w-28 object-contain bg-white rounded"
            />

            <div className="flex-1">
              <h2 className="font-bold">{item.title}</h2>

              <p className="text-green-400">${Number(item.price).toFixed(2)}</p>

              <div className="flex items-center gap-3 mt-3">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg w-10 h-8 flex items-center justify-center"
                >
                  -
                </button>

                <div className="px-4 py-1 bg-zinc-800 rounded-lg text-center w-16">
                  {item.quantity}
                </div>

                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg w-10 h-8 flex items-center justify-center"
                >
                  +
                </button>
              </div>

              <p className="text-sm text-zinc-400 mt-2">Subtotal: ${ (Number(item.price) * (item.quantity ?? 0)).toFixed(2) }</p>

            </div>

            <button onClick={() => removeItem(item.id)} className="bg-red-600 px-4 py-2 rounded">
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-end gap-6">
        <div className="text-right">
          <div className="text-zinc-400">Total</div>
          <div className="text-2xl font-bold text-green-400">${total.toFixed(2)}</div>
        </div>
        <button className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700">
          Checkout
        </button>
      </div>
    </div>
  );
}
