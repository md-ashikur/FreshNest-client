import food1 from "../../../images/home/product42.png"





const OrganicFood = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-5 lg:px-20 px-5 py-20 bg-third my-20">
      <div className="">
        <img src={food1} alt="" />
      </div>
      <div className="flex flex-col justify-center items-start">
        <p className="text-primary text-sm font-bold">NEW ORGANIC FOODS</p>
        <h2 className="font-bold text-6xl my-5">Sale 68% Off All <span className="text-primary ">Fruite Products</span></h2>
        <p>Discover incredible savings at FreshNest with a massive 68% off on all our fruit products! Now is the perfect time to stock up on your favorite fresh, organic fruits. From juicy apples and sweet berries to tangy citrus and exotic delights, enjoy premium quality at a fraction of the price. Don&apos;t miss out on this limited-time offer</p>

        <button className="bg-primary my-5 px-10 py-3 text-base rounded-full">Shop Now</button>
      </div>
    </div>
  );
};

export default OrganicFood;
