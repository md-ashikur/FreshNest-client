/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleFoodCard = ({ food, onDelete }) => {
  const { _id, img, name, price, description } = food;

  const handleDelete = async () => {
    alert("Are you sure you want to delete");
    await fetch(`https://freshnest-server.vercel.app/foods/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        onDelete(_id);
        toast("Product deleted successfully");
      });
  };
  return (
    <div className="border p-5 rounded-lg">
      <div className="flex justify-center w-full h-80 rounded-lg items-center p-5 bg-third overflow-hidden ">
        <img src={img} alt="" className="w-fit h-auto" />
      </div>
      <h2 className="text-xl font-bold mt-5">{name}</h2>
      <p className="my-3">{description}</p>
      <p className="font-bold text-primary ">${price}</p>

     <div className="flex gap-5 my-5 justify-end">
     <button
        onClick={handleDelete}
        className="bg-red-500 px-6 py-3 text-base rounded-full"
      >
        Delete
      </button>

      <Link
        to={`update/${_id}`}
        className="text-base bg-primary px-6 py-3 rounded-full flex items-center"
      >
        <button>Update</button>
      </Link>
     </div>

      <ToastContainer />
    </div>
  );
};

export default SingleFoodCard;
