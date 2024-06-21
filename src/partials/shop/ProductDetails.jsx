import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {

    const food = useLoaderData();
    const { img, name, price, category, description } = food;

    return (
        <div className="px-5 lg:px-20 py-20 grid lg:grid-cols-2 gap-5">
           <div className="w-full max-h-[70vh] overflow-hidden">
           <img src={img} alt="" className="w-full h-auto"/>
           </div>
           <div>
           <p className="text-2xl font-bold">{name}</p>
            <p className="text-xl font-bold text-primary">${price}</p>
            <p className="text-red-500">Category: {category}</p>
            <p>{description}</p>

            <button className="bg-primary px-8 py-2 text-base my-5 ">Buy</button>
           </div>

        </div>
    );
};

export default ProductDetails;