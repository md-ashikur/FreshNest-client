import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer py-10 bg-[#101010] lg:px-16 px-5  grid lg:grid-cols-5 text-base ">
        <aside className="max-w-[320px] lg:col-span-2">
          <h2 className="font-bold text-4xl ">FreshNest</h2>
          <p className="text-[#888B97]">
            At FreshNest, we&apos;re dedicated to bringing you the freshest foods and
            drinks right to your doorstep. Connect with us for the latest
            updates!
          </p>
          <div className="flex text-xl gap-5 mt-5">
            <FaFacebookF />
            <FaXTwitter />
            <FaInstagram />
          </div>
        </aside>

        <nav className="flex flex-col gap-3 mt-5 lg:mt-0">
          <h6 className="text-lg font-semibold">INFORMATION</h6>
          <Link to="" className="link link-hover text-[#888B97]">
            About us
          </Link>
          <Link to="" className="link link-hover text-[#888B97]">
            Blog
          </Link>
          <Link to="" className="link link-hover text-[#888B97]">
            Check out
          </Link>
          <Link to="" className="link link-hover text-[#888B97]">
            Ccontact
          </Link>
          <Link to="" className="link link-hover text-[#888B97]">
            Service
          </Link>
        </nav>

        <nav className="flex flex-col gap-3 mt-5 lg:mt-0">
          <h6 className="text-lg font-semibold">MY ACCOUNT</h6>
          <Link to="" className="link link-hover text-[#888B97]">
            My Account
          </Link>
          <Link to="" className="link link-hover text-[#888B97]">
            Shopping cart
          </Link>
          <Link to="" className="link link-hover text-[#888B97]">
            Most Read
          </Link>
          <Link to="" className="link link-hover text-[#888B97]">
            Tips & Tricks
          </Link>
        </nav>

        <nav className="flex flex-col gap-3 mt-5 lg:mt-0">
          <h6 className="text-lg font-semibold">CATEGORIES</h6>
          <Link to="" className="link link-hover text-[#888B97]">
            Fruits & Vegetables
          </Link>
          <Link to="" className="link link-hover text-[#888B97]">
            Dairy Products
          </Link>
          <Link to="" className="link link-hover text-[#888B97]">
            Package Foods
          </Link>
          <Link to="" className="link link-hover text-[#888B97]">
            Beverage
          </Link>
          <Link to="" className="link link-hover text-[#888B97]">
            Health & Wellness
          </Link>
        </nav>

        <nav className="flex flex-col gap-3 mt-5 lg:mt-0">
          <h6 className="text-lg font-semibold uppercase">Contact</h6>
          <a className="link link-hover text-[#888B97]">
            2464 Royal Ln. Mesa, New Jersey 45463
          </a>
          <a className="link link-hover text-[#888B97]">(012) 345-6789</a>
          <a className="link link-hover text-[#888B97]">example@mail.com</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
