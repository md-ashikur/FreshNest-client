import { useEffect, useState } from "react";
import SingleShopCard from "./SingleShopCard";

const ShopBody = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOptions, setFilterOptions] = useState({
    sort: "",
    category: "",
  });
  const [showFilterModal, setShowFilterModal] = useState(false);
  const itemsPerPage = 9;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);



  const filteredFruits = products
    .filter(
      (food) =>
        food.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterOptions.category === "" ||
          food.category === filterOptions.category)
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
      {currentItems.map((food) => (
          <SingleShopCard
            key={food._id}
            food={food}
           
          />
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
