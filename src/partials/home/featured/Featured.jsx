import { FaRegCircle } from "react-icons/fa";

import { useEffect, useState } from "react";
import SingleShopCard from "../../shop/SingleShopCard";

const Featured = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <div className="flex justify-center flex-col items-center">
        <div className="flex items-center gap-1">
          <FaRegCircle className="text-xs text-primary font-bold" />
          <FaRegCircle className="text-xs text-primary font-bold" />
          <FaRegCircle className="text-xs text-primary font-bold" />
          <p className="text-xs font-semibold">FRESH FROM OUR FARM</p>
          <FaRegCircle className="text-xs text-primary font-bold" />
          <FaRegCircle className="text-xs text-primary font-bold" />
          <FaRegCircle className="text-xs text-primary font-bold" />
        </div>
        <h2 className="text-4xl text-center font-bold my-4">Featured Organic Products</h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-5 lg:px-20 px-5 my-10">
       
      {products.slice(0, 3).map((food) => (
          <SingleShopCard
            key={food._id}
            food={food}
          />
        ))}
       
      </div>
    </div>
  );
};

export default Featured;
