import { FaRegCircle } from "react-icons/fa";
import p1 from "../../../images/home/product12.png"

const Featured = () => {
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
        <div className="border p-5 rounded-lg">
          <div className="flex justify-center w-full h-80 rounded-lg items-center p-5 bg-third ">
            <img src={p1} alt="" />
          </div>
          <h2 className="text-xl font-bold mt-5">Organic Tomato</h2>
          <p className="font-bold text-primary my-3">$50.00</p>
          <button className="bg-primary px-6 py-3 text-base rounded-full">View Details</button>
        </div>
        <div className="border p-5 rounded-lg">
          <div className="flex justify-center w-full h-80 rounded-lg items-center p-5 bg-third ">
            <img src={p1} alt="" />
          </div>
          <h2 className="text-xl font-bold mt-5">Organic Tomato</h2>
          <p className="font-bold text-primary my-3">$50.00</p>
          <button className="bg-primary px-6 py-3 text-base rounded-full">View Details</button>
        </div>
        <div className="border p-5 rounded-lg">
          <div className="flex justify-center w-full h-80 rounded-lg items-center p-5 bg-third ">
            <img src={p1} alt="" />
          </div>
          <h2 className="text-xl font-bold mt-5">Organic Tomato</h2>
          <p className="font-bold text-primary my-3">$50.00</p>
          <button className="bg-primary px-6 py-3 text-base rounded-full">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
