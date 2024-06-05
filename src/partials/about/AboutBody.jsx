import { Link } from "react-router-dom";
import { FaRegCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import img1 from "../../images/about/sale7.png";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity, MdOutlineSupportAgent } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import Team from "./Team";

const AboutBody = () => {
  return (
    <div>
      {/* header start--------- */}
      <div className="lg:h-[50vh] h-[20vh] px-10 bg-third flex items-center">
        <div>
          <h1 className="text-5xl font-bold">About us</h1>
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li className="text-primary">About</li>
            </ul>
          </div>
        </div>
      </div>
      {/* header end--------- */}

      <section className="grid lg:grid-cols-2 gap-5 lg:px-20 py-20 px-5">
        <div>
          <img src={img1} alt="" />
        </div>

        <div>
          <div className="flex items-center gap-1">
            <FaRegCircle className="text-xs text-primary font-bold" />
            <FaRegCircle className="text-xs text-primary font-bold" />
            <FaRegCircle className="text-xs text-primary font-bold" />
            <p className="text-sm font-semibold">FRESH FROM OUR FARM</p>
          </div>

          <h1 className="text-5xl font-black my-4">
            Trusted Organic <span className="text-primary">Food</span> Store
            Conscious
          </h1>
          <p>
            At FreshNest, we pride ourselves on being a trusted organic food
            store, dedicated to offering high-quality, sustainably sourced
            products. Our commitment to conscious consumption means we
            prioritize the health of our customers and the planet. By choosing
            FreshNest, you&apos;re not only nourishing your body with wholesome
            foods but also supporting ethical farming practices and a greener
            future.
          </p>

          <button className="bg-primary flex items-center gap-2 my-4 text-base rounded-full px-8 py-2">
            Subcribe <FaArrowRightLong />
          </button>
        </div>
      </section>

      {/* Good Organic Team---------- */}
      <section className="py-20 lg:px-20 px-5">
        <Team />
        <div className="grid lg:grid-cols-4 gap-5 mt-20">
          <div className="grid grid-cols-3">
            <div>
              <div className="bg-third-300 hover:bg-primary text-primary hover:text-white hover:shadow-lg flex justify-center items-center rounded-full p-5 text-4xl w-20 h-20">
                <TbTruckDelivery />
              </div>
            </div>
            <div className="col-span-2 flex flex-col justify-center">
              <h4 className="font-bold">Free Shipping</h4>
              <p>Free on order over $100</p>
            </div>
          </div>

          <div className="grid grid-cols-3">
            <div>
              <div className="bg-third-300 hover:bg-primary text-primary hover:text-white hover:shadow-lg flex justify-center items-center rounded-full p-5 text-4xl w-20 h-20">
                <MdOutlineSecurity />
              </div>
            </div>
            <div className="col-span-2 flex flex-col justify-center">
              <h4 className="font-bold">Security Payment</h4>
              <p>100% security payment</p>
            </div>
          </div>

          <div className="grid grid-cols-3">
            <div>
              <div className="bg-third-300 hover:bg-primary text-primary hover:text-white hover:shadow-lg flex justify-center items-center rounded-full p-5 text-4xl w-20 h-20">
                <GiReturnArrow />
              </div>
            </div>
            <div className="col-span-2 flex flex-col justify-center">
              <h4 className="font-bold">30 Day Return</h4>
              <p>30 day money guarantee</p>
            </div>
          </div>

          <div className="grid grid-cols-3">
            <div>
              <div className="bg-third-300 hover:bg-primary text-primary hover:text-white hover:shadow-lg flex justify-center items-center rounded-full p-5 text-4xl w-20 h-20">
                <MdOutlineSupportAgent />
              </div>
            </div>
            <div className="col-span-2 flex flex-col justify-center">
              <h4 className="font-bold">24/7 Support</h4>
              <p>Support every time fast</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutBody;
