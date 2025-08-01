import React, { useState } from 'react';

const initialCart = [
  {
    id: 1,
    name: 'Casual Shirt',
    price: 1999,
    quantity: 1,
    image: '/product1.jpg',
  },
  {
    id: 2,
    name: 'Jeans',
    price: 1999,
    quantity: 2,
    image: '/product-2.jpg',
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCart);

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to remove this item?");
    if (confirmDelete) {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    }
  };
  
  const clearCart = () => {
    const confirmClear = window.confirm("Are you sure you want to clear the entire cart?");
    if (confirmClear) {
      setCartItems([]);
    }
  };
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6 py-20">
      {/* Left: Cart Items */}
      <div className="md:col-span-2">
        <h2 className="text-2xl font-bold mb-4 text-[#479789]">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded"
                  />
                  <div>
                    <h3 className="font-semibold text-[#479789]">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      ₹{item.price} × {item.quantity}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        className="px-2 py-1 bg-gray-200 rounded"
                        onClick={() => decreaseQty(item.id)}
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="px-2 py-1 bg-gray-200 rounded"
                        onClick={() => increaseQty(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Right: Price Summary */}
      <div className="bg-white p-6 rounded-lg shadow-md h-fit sticky top-4">
        <h3 className="text-xl font-bold mb-4 text-[#479789]">Summary</h3>
        <div className="flex justify-between mb-2">
          <span className="text-gray-700">Subtotal</span>
          <span className="text-gray-800 font-semibold">
            ₹{totalAmount.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="text-gray-700">Shipping</span>
          <span className="text-gray-800 font-semibold">Free</span>
        </div>
        <hr className="mb-4" />
        <div className="flex justify-between text-lg font-bold text-[#479789] mb-6">
          <span>Total</span>
          <span>₹{totalAmount.toLocaleString()}</span>
        </div>
        <button className="w-full bg-[#479789] text-white py-2 rounded-xl hover:bg-[#3d8377] transition duration-300 mb-2">
          Checkout
        </button>
        <button
          className="w-full bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition duration-300"
          onClick={clearCart}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
