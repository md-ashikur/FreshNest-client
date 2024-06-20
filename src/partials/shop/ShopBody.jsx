import { useState } from "react";

const fruitData = [
  {
    img: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Apple",
    price: 2.5,
    category: "Healthy Foods",
  },
  {
    img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Banana",
    price: 1.2,
    category: "Healthy Foods",
  },
  {
    img: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Orange",
    price: 3.0,
    category: "Healthy Foods",
  },
  { img: "milk.jpg", name: "Milk", price: 1.5, category: "Dairy Farm" },
  { img: "cheese.jpg", name: "Cheese", price: 4.0, category: "Dairy Farm" },
  { img: "yogurt.jpg", name: "Yogurt", price: 2.0, category: "Dairy Farm" },
  { img: "chips.jpg", name: "Chips", price: 1.8, category: "Package Foods" },
  {
    img: "cookies.jpg",
    name: "Cookies",
    price: 2.2,
    category: "Package Foods",
  },
  { img: "juice.jpg", name: "Juice", price: 2.9, category: "Package Foods" },
];

const ShopBody = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOptions, setFilterOptions] = useState({
    sort: "",
    category: "",
  });
  const [showFilterModal, setShowFilterModal] = useState(false);
  const itemsPerPage = 9;

  const [quantities, setQuantities] = useState(fruitData.map(() => 1));

const updateQuantity = (index, change) => {
  setQuantities(prevQuantities => {
    const newQuantities = [...prevQuantities];
    newQuantities[index] = Math.max(newQuantities[index] + change, 1); // Ensure quantity doesn't go below 1
    return newQuantities;
  });
};

  const filteredFruits = fruitData
    .filter(
      (fruit) =>
        fruit.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterOptions.category === "" ||
          fruit.category === filterOptions.category)
    )
    .sort((a, b) => {
      if (filterOptions.sort === "lowToHigh") return a.price - b.price;
      if (filterOptions.sort === "highToLow") return b.price - a.price;
      return 0;
    });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredFruits.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredFruits.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (currentPage > 3 && currentPage < totalPages - 2) {
        pageNumbers.push(currentPage - 1);
        pageNumbers.push(currentPage);
        pageNumbers.push(currentPage + 1);
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      }
    }
    return pageNumbers;
  };

  return (
    <div className="lg:mx-20 mx-5 py-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Our Fruits</h1>
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search by name"
          className="w-full p-2 border border-gray-300 outline-primary rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="ml-2 p-2 border border-gray-300 outline-primary rounded"
          onClick={() => setShowFilterModal(true)}
        >
          Filter
        </button>
      </div>
      <hr className="my-6 bg-primary-500 h-1" />
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {currentItems.map((fruit, index) => (
        <div key={index} className="border p-5 rounded-lg">
        <div className="flex justify-center w-full h-52 rounded-lg overflow-hidden items-center bg-third">
          <img src={fruit.img} alt={fruit.name} className="w-full h-auto" />
        </div>
        <div className="flex justify-between items-center mt-5">
          <h2 className="text-xl font-bold">{fruit.name}</h2>
          <p className="text-sm">Category: {fruit.category}</p>
        </div>
        <p className="font-bold text-primary my-3">
          ${fruit.price.toFixed(2)}
        </p>
        <div className="flex justify-between items-center">
          <button className="bg-primary px-8 py-2 text-base rounded-full">
            Buy
          </button>
          <div className="flex items-center">
            <button className="px-3 border border-gray-300 rounded-l" onClick={() => updateQuantity(index, -1)}>
              -
            </button>
            <input
              type="number"
              min="1"
              value={quantities[index]}
              className="w-16 px-2  border-t border-b border-gray-300 text-center"
              readOnly
            />
            <button className="px-3  border border-gray-300 rounded-r" onClick={() => updateQuantity(index, 1)}>
              +
            </button>
          </div>
        </div>
      </div>
       
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 mx-1 ${
            currentPage === 1 ? "bg-gray-300" : "text-white bg-gray-500"
          }`}
        >
          Prev
        </button>
        {getPageNumbers().map((number, index) => (
          <button
            key={index}
            onClick={() => typeof number === "number" && paginate(number)}
            className={`px-3 py-1 mx-1 ${
              currentPage === number ? "bg-primary text-white" : "text-third"
            }`}
            disabled={number === "..."}
          >
            {number}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 mx-1 ${
            currentPage === totalPages
              ? "bg-gray-300"
              : "bg-gray-500 text-white"
          }`}
        >
          Next
        </button>
      </div>

      {showFilterModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Filter Options</h2>
            <div className="mb-4">
              <label className="block mb-2">Sort by Price</label>
              <select
                className="w-full p-2 border border-gray-300 rounded"
                value={filterOptions.sort}
                onChange={(e) =>
                  setFilterOptions({ ...filterOptions, sort: e.target.value })
                }
              >
                <option value="">Select</option>
                <option value="lowToHigh">Low to High</option>
                <option value="highToLow">High to Low</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Category</label>
              <select
                className="w-full p-2 border border-gray-300 rounded"
                value={filterOptions.category}
                onChange={(e) =>
                  setFilterOptions({
                    ...filterOptions,
                    category: e.target.value,
                  })
                }
              >
                <option value="">All</option>
                <option value="Healthy Foods">Healthy Foods</option>
                <option value="Dairy Farm">Dairy Farm</option>
                <option value="Package Foods">Package Foods</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded mr-2"
                onClick={() => {
                  setFilterOptions({ sort: "", category: "" });
                  setShowFilterModal(false);
                }}
              >
                Reset
              </button>
              <button
                className="px-4 py-2 bg-primary text-white rounded"
                onClick={() => setShowFilterModal(false)}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopBody;
