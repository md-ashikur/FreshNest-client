import { FaFacebookF, FaInstagram, FaRegCircle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import man1 from "../../images/about/man1.png";

const Team = () => {
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
          <h2 className="text-4xl font-bold my-4">Good Organic Team</h2>
        </div>

        {/* cards-------- */}
        <div className="grid lg:grid-cols-4 gap-5 my-5">
          {/* card 1------ */}
          <div className="rounded-lg p-5 flex justify-center flex-col items-center bg-third hover:shadow-xl shadow-md">
            <div className="rounded-full h-44 w-44 my-4 overflow-hidden ">
              <img src={man1} alt="" className="h-full w-full" />
            </div>
            <h3 className="font-bold text-xl">Michel Harsh</h3>
            <p>Real Farmer</p>
            <div className="flex text-xl gap-5 my-5 text-primary-700 ">
              <FaFacebookF />
              <FaXTwitter/>
              <FaInstagram />
            </div>
          </div>

          {/* card 2------ */}
          <div className="rounded-lg p-5 flex justify-center flex-col items-center bg-third hover:shadow-xl shadow-md">
            <div className="rounded-full h-44 w-44 my-4 overflow-hidden ">
              <img src={man1} alt="" className="h-full w-full" />
            </div>
            <h3 className="font-bold text-xl">Jakson Mike</h3>
            <p>Real Farmer</p>
            <div className="flex text-xl gap-5 my-5 text-primary-700 ">
              <FaFacebookF />
              <FaXTwitter />
              <FaInstagram />
            </div>
          </div>

          {/* card 3------ */}
          <div className="rounded-lg p-5 flex justify-center flex-col items-center bg-third hover:shadow-xl shadow-md">
            <div className="rounded-full h-44 w-44 my-4 overflow-hidden ">
              <img src={man1} alt="" className="h-full w-full" />
            </div>
            <h3 className="font-bold text-xl">David Jim</h3>
            <p>Real Farmer</p>
            <div className="flex text-xl gap-5 my-5 text-primary-700 ">
              <FaFacebookF />
              <FaXTwitter />
              <FaInstagram />
            </div>
          </div>

          {/* card 4------ */}
          <div className="rounded-lg p-5 flex justify-center flex-col items-center bg-third hover:shadow-xl shadow-md">
            <div className="rounded-full h-44 w-44 my-4 overflow-hidden ">
              <img src={man1} alt="" className="h-full w-full" />
            </div>
            <h3 className="font-bold text-xl">Harry Lara</h3>
            <p>Real Farmer</p>
            <div className="flex text-xl gap-5 my-5 text-primary-700 ">
              <FaFacebookF />
              <FaXTwitter />
              <FaInstagram />
            </div>
          </div>
        </div>
        </div>
    );
};

export default Team;