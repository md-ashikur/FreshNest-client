import { FaRegCircle } from "react-icons/fa";
import b1 from "../../../images/home/instagram3.png";

const HomeBlog = () => {
  return (
    <div className="my-20">
      <div className="flex justify-center flex-col items-center">
        <div className="flex items-center gap-1">
          <FaRegCircle className="text-xs text-primary font-bold" />
          <FaRegCircle className="text-xs text-primary font-bold" />
          <FaRegCircle className="text-xs text-primary font-bold" />
          <p className="text-xs font-semibold">LATEST BLOG</p>
          <FaRegCircle className="text-xs text-primary font-bold" />
          <FaRegCircle className="text-xs text-primary font-bold" />
          <FaRegCircle className="text-xs text-primary font-bold" />
        </div>
        <h2 className="text-4xl font-bold my-4">Our Blog</h2>
      </div>

      {/* card--------- */}
      <div className="grid lg:grid-cols-3 gap-5 lg:px-20 my-10 px-5">
        <div className="shadow-md hover:shadow-xl rounded-xl">
          <div className="overflow-hidden w-full h-60 rounded-t-2xl bg-primary items-center  ">
            <img src={b1} alt="" />
          </div>
          <div className="p-5">
            <h2 className="text-xl font-bold">
              All Natural Italian-Style Chicken Meatballs
            </h2>

           <div className="flex justify-between my-3 text-sm">
           <p>Jessica Doen</p>
            <p> 6 hours ago</p>
           </div>

            <p className=" my-3">
              Italian cuisine is renowned for rich flavors and comforting
              dishes, and nothing embodies this culinary  
            </p>
            <p className="text-right text-primary font-bold text-xl">
             Read
            </p>
          </div>
        </div>
        <div className="shadow-md hover:shadow-xl rounded-xl">
          <div className="overflow-hidden w-full h-60 rounded-t-2xl bg-primary items-center  ">
            <img src={b1} alt="" />
          </div>
          <div className="p-5">
            <h2 className="text-xl font-bold">
              All Natural Italian-Style Chicken Meatballs
            </h2>

           <div className="flex justify-between my-3 text-sm">
           <p>Jessica Doen</p>
            <p> 6 hours ago</p>
           </div>

            <p className=" my-3">
              Italian cuisine is renowned for rich flavors and comforting
              dishes, and nothing embodies this culinary  
            </p>
            <p className="text-right text-primary font-bold text-xl">
             Read
            </p>
          </div>
        </div>
        <div className="shadow-md hover:shadow-xl rounded-xl">
          <div className="overflow-hidden w-full h-60 rounded-t-2xl bg-primary items-center  ">
            <img src={b1} alt="" />
          </div>
          <div className="p-5">
            <h2 className="text-xl font-bold">
              All Natural Italian-Style Chicken Meatballs
            </h2>

           <div className="flex justify-between my-3 text-sm">
           <p>Jessica Doen</p>
            <p> 6 hours ago</p>
           </div>

            <p className=" my-3">
              Italian cuisine is renowned for rich flavors and comforting
              dishes, and nothing embodies this culinary  
            </p>
            <p className="text-right text-primary font-bold text-xl">
             Read
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
