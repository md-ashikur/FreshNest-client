
import { MdHighQuality } from "react-icons/md";
import { RiCustomerService2Fill, RiSecurePaymentFill } from "react-icons/ri";
import { TbTruckDelivery, TbTruckReturn } from "react-icons/tb";

const KeyPoint = () => {
  return (
    <div className="bg-third lg:px-20 py-20 grid lg:grid-cols-5 gap-5 justify-items-center">
      <div className="bg-base rounded-full w-44 h-44 flex flex-col justify-center items-center shadow-lg">
      <TbTruckDelivery className="text-5xl text-primary" />
        <h3 className="text-xl font-bold">Free Delivery</h3>
        <p>from $50</p>
      </div>
      <div className="bg-base rounded-full w-44 h-44 flex flex-col justify-center items-center shadow-lg">
        <RiCustomerService2Fill className="text-5xl text-primary" />
        <h3 className="text-xl font-bold">99 % Customer</h3>
        <p>Feedbacks</p>
      </div>
      <div className="bg-base rounded-full w-44 h-44 flex flex-col justify-center items-center shadow-lg">
      <TbTruckReturn className="text-5xl text-primary" />
        <h3 className="text-xl font-bold">365 Days</h3>
        <p>for free return</p>
      </div>
      <div className="bg-base rounded-full w-44 h-44 flex flex-col justify-center items-center shadow-lg">
      <RiSecurePaymentFill className="text-5xl text-primary" />
        <h3 className="text-xl font-bold">Payment</h3>
        <p>Secure System</p>
      </div>
      <div className="bg-base rounded-full w-44 h-44 flex flex-col justify-center items-center shadow-lg">
      <MdHighQuality className="text-5xl text-primary" />
        <h3 className="text-xl font-bold">Only Best</h3>
        <p>Food</p>
      </div>
    </div>
  );
};

export default KeyPoint;
