import React, { useState } from 'react';

const mockData = [
  { name: 'Lehnga', store: 'Cotton House', category: 'Ladies Dresses' },
  { name: 'Daily Wear', store: 'Cotton House', category: 'Ladies Dresses' },
  { name: 'Tomm Hiddle Tone Jeans', store: 'Fuel', category: 'Jeans' },
  { name: 'Tomm Hiddle Denim Shirt', store: 'Fuel', category: 'Shirt' },
  { name: 'Tomm Hiddle Denim Shirt', store: 'VeggieMarket', category: 'Vegetables' },
];

const allCategories = [...new Set(mockData.map((item) => item.category))];
const allStores = [...new Set(mockData.map((item) => item.store))];

const Search = () => {
  const [query, setQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [storeFilter, setStoreFilter] = useState('');

  const handleSearch = (e) => setQuery(e.target.value);
  const handleCategoryFilter = (e) => setCategoryFilter(e.target.value);
  const handleStoreFilter = (e) => setStoreFilter(e.target.value);

  const filtered = mockData.filter((item) => {
    const regex = new RegExp(query, 'i');
    const matchesQuery =
      query === '' ? false : regex.test(item.name) || regex.test(item.store) || regex.test(item.category);

    const matchesCategory = categoryFilter ? item.category === categoryFilter : true;
    const matchesStore = storeFilter ? item.store === storeFilter : true;

    return matchesQuery && matchesCategory && matchesStore;
  });

  return (
    <div className="max-w-md mx-auto px-4 pb-60">
         <h2 className="text-2xl font-bold mb-4 text-[#479789] text-center pt-4 ">Search</h2>
      <input
        type="text"
        placeholder="Search by name, store, or category..."
        value={query}
        onChange={handleSearch}
        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#479789] mb-4"
      />

      <div className="flex gap-4 mb-4">
        <select
          value={categoryFilter}
          onChange={handleCategoryFilter}
          className="w-full border px-3 py-2 rounded-md text-gray-700"
        >
          <option value="">All Categories</option>
          {allCategories.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>

        <select
          value={storeFilter}
          onChange={handleStoreFilter}
          className="w-full border px-3 py-2 rounded-md text-gray-700"
        >
          <option value="">All Stores</option>
          {allStores.map((store, i) => (
            <option key={i} value={store}>{store}</option>
          ))}
        </select>
      </div>

      <ul className="space-y-2">
        {query && filtered.length > 0 ? (
          filtered.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 bg-gray-100 rounded hover:bg-[#479789] hover:text-white"
            >
              <div className="font-semibold">{item.name}</div>
              <div className="text-sm text-gray-600">{item.store} — {item.category}</div>
            </li>
          ))
        ) : query ? (
          <li className="text-gray-500">No results found.</li>
        ) : null}
      </ul>
    </div>
  );
};

export default Search;
