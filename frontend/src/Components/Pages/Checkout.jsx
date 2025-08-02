import React, { useState } from 'react';

const initialCart = [
  { id: 1, name: "T-Shirt", price: 499, quantity: 2 },
  { id: 2, name: "Jeans", price: 1299, quantity: 1 },
  { id: 3, name: "Cap", price: 199, quantity: 3 },
];

const Checkout = () => {
  const [cart, setCart] = useState(initialCart);

  const updateQuantity = (id, amount) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  return (
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Cart Items */}
      <div className="md:col-span-2 space-y-4">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          cart.map(item => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white p-4 rounded shadow"
            >
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">₹{item.price} x {item.quantity}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="px-2 text-xl border rounded"
                >−</button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="px-2 text-xl border rounded"
                >+</button>
                <button
                  onClick={() => removeItem(item.id)}
                  className="ml-4 text-red-500 hover:underline text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Summary */}
      <div className="bg-white p-6 rounded shadow sticky top-4">
        <h2 className="text-xl font-bold mb-4">Summary</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax (10%)</span>
            <span>₹{tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t pt-2">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
        </div>
        <button
          className="w-full mt-6 bg-[#479789] text-white py-2 rounded hover:bg-[#36756f] transition"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Checkout;
