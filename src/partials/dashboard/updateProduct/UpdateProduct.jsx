import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateProduct = () => {
    const food = useLoaderData();

    const {
      register,
      handleSubmit,
      formState: { errors },
      setValue,
    } = useForm({
      defaultValues: {
    
        img: food.img,
        name: food.name,
        price: food.price,
        city: food.description,
      },
    });
  
    const onSubmit = async (data) => {
      const { id, img, name: houseName, price, city: cityName } = data;
  
      const updatedHouse = { id, img, houseName, price, cityName };
  
      alert("Confirm Update product");
  
      await fetch(`http://localhost:5000/house/${food._id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updatedHouse),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast("Product updated successfully");
        });
    };
    return (
        <div>
            <h2 className="text-center">Update</h2>
        <section className="py-20  px-20 bg-third">
          <div className="w-[40vw] bg-white mx-auto my-7 p-10 rounded-lg">
            {/* form-------------- */}
            <form onSubmit={handleSubmit(onSubmit)} className="my-5">
              {/* img------- */}
              <div>
                <input
                  placeholder="Image"
                  className="outline-none border-inherit border my-2 px-5 py-3 w-full h-[50px] rounded-2xl"
                  {...register("img", {
                    required: "Image is required",
                  })}
                  aria-invalid={errors.img ? "true" : "false"}
                />
                {errors.img && (
                  <p role="alert" className="pl-2 text-red-500 text-xs ">
                    {errors.img.message}
                  </p>
                )}
              </div>
  
              {/* Name------- */}
              <div>
                <input
                  placeholder="Name"
                  className="outline-none border-inherit border my-2 px-5 py-3 w-full h-[50px] rounded-2xl"
                  {...register("name", {
                    required: "Name is required",
                  })}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p role="alert" className="pl-2 text-red-500 text-xs ">
                    {errors.name.message}
                  </p>
                )}
              </div>
  
              {/* price------ */}
              <div>
                <input
                  placeholder="Price"
                  className="outline-none border-inherit border my-2 px-5 py-3 w-full h-[50px] rounded-2xl"
                  {...register("price", {
                    required: "price is required",
                  })}
                  aria-invalid={errors.price ? "true" : "false"}
                />
                {errors.price && (
                  <p role="alert" className="pl-2 text-red-500 text-xs ">
                    {errors.price.message}
                  </p>
                )}
              </div>
  
              {/* description------ */}
              <div>
                <textarea
                  placeholder="Description"
                  className="outline-none border-inherit border my-2 px-5 py-3 w-full h-[120px] rounded-2xl"
                  {...register("description", {
                    required: "Description is required",
                  })}
                  aria-invalid={errors.description ? "true" : "false"}
                />
                {errors.description && (
                  <p role="alert" className="pl-2 text-red-500 text-xs ">
                    {errors.description.message}
                  </p>
                )}
              </div>
  
              <input
                type="submit"
                value="Add"
                className="hover:scale-[1.04] transition duration-150 ease-in-out bg-primary h-[60px] px-7 w-full rounded-xl text-base"
              />
            </form>
          </div>
        </section>
  
        
      </div>
    );
};

export default UpdateProduct;