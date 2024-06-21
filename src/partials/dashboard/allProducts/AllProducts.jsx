// import { useEffect, useState } from "react";
// import SingleFoodCard from "../../../Components/dashboardCard/SingleFoodCard";

const AllProducts = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/foods")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  // const handleDeleteProduct = (id) => {
  //   setProducts(products.filter((product) => product._id !== id));
  // };
  return (
    <div>
      <h1 className="text-5xl font-bold text-center">All Produts</h1>
      <div className="my-16 grid grid-cols-2 gap-4">
        {/* {products.map((food) => (
          <SingleFoodCard
            key={food._id}
            food={food}
            onDelete={handleDeleteProduct}
          />
        ))} */}
      </div>
    </div>
  );
};

export default AllProducts;
