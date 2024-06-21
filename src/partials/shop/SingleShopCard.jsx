/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const SingleShopCard = ({ food }) => {
  const { _id, img, name, price, category, description } = food;
  return (
    <div>
      <div key={_id} className="bg-white border p-5 rounded-lg">
        <div className="flex justify-center w-full h-52 rounded-lg overflow-hidden items-center bg-third">
          <img src={img} alt={name} className="w-full h-auto" />
        </div>
        <div className="flex justify-between items-center mt-5">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-sm">Category: {category}</p>
        </div>

        <p className=" my-3">{description}</p>
        <p className="font-bold text-primary my-3">${price}</p>

        <div className="flex gap-5 my-5 justify-end">
          <Link
            to={`/details/${_id}`}
            className="text-base bg-primary px-8 py-2 rounded-full flex items-center"
          >
            <button>Buy</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleShopCard;
