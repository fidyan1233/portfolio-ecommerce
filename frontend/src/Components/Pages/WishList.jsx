import React, { useState } from 'react';

const initialBucket = [
  { id: 1, name: 'Cement Bag', price: 350, quantity: 1, store: 'BuildMart', category: 'Construction' },
  { id: 2, name: 'Steel Rod', price: 1200, quantity: 3, store: 'IronHouse', category: 'Construction' },
  { id: 3, name: 'Paint', price: 500, quantity: 2, store: 'ColorKart', category: 'Decor' },
];

const WishList = () => {
    const [bucket, setBucket] = useState(initialBucket);

    const updateQuantity = (id, amount) => {
      setBucket(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
        )
      );
    };
  
    const removeItem = (id) => {
      setBucket(prev => prev.filter(item => item.id !== id));
    };
  
    const subtotal = bucket.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
    return (
      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6 lg:py-20 pb-20">
      {/* Left: Cart Items */}
      <div className="md:col-span-2">
        <h2 className="text-2xl font-bold mb-4 text-[#479789] text-center">Whish List</h2>
          {bucket.length === 0 ? (
            <p className="text-gray-500">Whish List is empty.</p>
          ) : (
            bucket.map(item => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-white p-4 rounded shadow"
              >
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    Store: {item.store} | Category: {item.category}<br />
                    ₹{item.price} x {item.quantity}
                  </p>
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
          </div>
          <button
            className="w-full mt-6 bg-[#479789] text-white py-2 rounded hover:bg-[#36756f] transition"
          >
            Finalize Bucket
          </button>
        </div>
      </div>
    );
  };
  
export default WishList