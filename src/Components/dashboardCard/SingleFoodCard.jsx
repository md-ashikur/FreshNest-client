/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleFoodCard = ({ food, onDelete }) => {
  const { _id, img, name, price, category, description } = food;

  const handleDelete = async () => {
    alert("Are you sure you want to delete");
    await fetch(`http://localhost:5000/products/${_id}`, {
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

    <div>
        <div key={_id} className="bg-white border p-5 rounded-lg">
        <div className="flex justify-center w-full h-52 rounded-lg overflow-hidden items-center bg-third">
          <img src={img} alt={name} className="w-full h-full" />
        </div>
        <div className="flex justify-between items-center mt-5">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-sm">Category: {category}</p>
        </div>

        <p className=" my-3">
          {description}
        </p>
        <p className="font-bold text-primary my-3">
          ${price}
        </p>

        <div className="flex gap-5 my-5 justify-end">
     <button
        onClick={handleDelete}
        className="bg-red-500 px-8 py-2 text-base rounded-full"
      >
        Delete
      </button>

      <Link
        to={`edit/${_id}`}
        className="text-base bg-primary px-8 py-2 rounded-full flex items-center"
      >
        <button>Edit</button>
      </Link>
     </div>
       
      </div>




     

    

      <ToastContainer />
 
    </div>
   
  );
};

export default SingleFoodCard;
