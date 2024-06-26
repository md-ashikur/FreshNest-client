import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const img = data.img;
    const name = data.name;
    const price = data.price;
    const description = data.description;
    const category = data.category;

    const alldata = { img, name, price, description, category };

    alert("Confirm Add product");

    await fetch("http://localhost:5000/product", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(alldata),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Product added successfully");
        console.log(data);
        reset();
      });
  };

  return (
    <div>
      <section className="py-20 px-5 lg:px-20 bg-third">
        <div className="lg:w-[40vw] bg-white mx-auto my-7 lg:p-10 rounded-lg">
          <p className="text-2xl font-bold">Add Product</p>
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
                  required: "Price is required",
                })}
                aria-invalid={errors.price ? "true" : "false"}
              />
              {errors.price && (
                <p role="alert" className="pl-2 text-red-500 text-xs ">
                  {errors.price.message}
                </p>
              )}
            </div>

            {/* category------ */}
            <div>
              <select
                className="outline-none border-inherit border my-2 px-5 py-3 w-full h-[50px] rounded-2xl"
                {...register("category", {
                  required: "Category is required",
                })}
                aria-invalid={errors.category ? "true" : "false"}
              >
                <option value="">Select Category</option>
                <option value="Healthy Foods">Healthy Foods</option>
                <option value="Dairy Farm">Dairy Farm</option>
                <option value="Package Foods">Package Foods</option>
              </select>
              {errors.category && (
                <p role="alert" className="pl-2 text-red-500 text-xs ">
                  {errors.category.message}
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

      <ToastContainer />
    </div>
  );
};

export default AddProduct;
