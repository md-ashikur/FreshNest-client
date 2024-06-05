import { FaArrowRightLong } from "react-icons/fa6";
import bannerimg from "../../images/home/banner7.png";

const HomeHeader = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-5 py-20 lg:px-20 px-5">
      <div>
        <p className="uppercase font-bold text-neutral">100% organic foods</p>
        <h1 className="text-8xl font-black">
          Nourish <br></br>Your Health{" "}
          <span className="text-primary">Naturally</span>
        </h1>
        <p className="my-5">
          Discover a selection of fresh foods and drinks at FreshNest. We
          provide you with organic products that nourish your body and delight
          your taste buds. Shop with us and experience the difference of truly
          fresh, responsibly sourced foods delivered straight to your door.
        </p>

        <button className="bg-primary flex items-center gap-2 my-4 text-base text-2xl rounded-full px-10 py-3">
          Explore <FaArrowRightLong />
        </button>
      </div>
      <div>
        <img src={bannerimg} alt="" />
      </div>
    </div>
  );
};

export default HomeHeader;
