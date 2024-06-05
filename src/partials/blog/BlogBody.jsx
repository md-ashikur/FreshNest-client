import { Link } from "react-router-dom";
import blog1 from "../../images/blog/blog-6.jpg";
import { GoCommentDiscussion } from "react-icons/go";
import { RxAvatar } from "react-icons/rx";
import { IoCalendarOutline } from "react-icons/io5";

const BlogBody = () => {
  return (
    <div>
      {/* header start--------- */}
      <div className="lg:h-[50vh] h-[20vh] px-10 bg-third flex items-center">
        <div>
          <h1 className="text-5xl font-bold">Our Blog</h1>
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li className="text-primary">Blog</li>
            </ul>
          </div>
        </div>
      </div>
      {/* header end--------- */}

      <div className="grid lg:grid-cols-3 gap-5 lg:p-16 p-5">
        <div className="col-span-2 lg:pr-10">
          <div>
            <div className="w-full overflow-hidden">
              <img src={blog1} alt="" />
            </div>
            <div className="my-5">
              <p className="text-sm flex items-center gap-3 my-3">
                <IoCalendarOutline />
                December 10, 2019 / <RxAvatar />
                by admin /<GoCommentDiscussion /> 6
              </p>
              <h2 className="text-3xl font-bold text-primary">
                Pizza With Chicken, Tomatoes and Basil
              </h2>
              <p className="my-5">
                The foundation of any great pizza is its crust. Whether you
                prefer a thin, crispy base or a thick, chewy one, the dough
                should be crafted with care. For a homemade touch, consider
                making your dough from scratch using simple ingredients: flour,
                water, yeast, and a pinch of salt. Allow it to rise to achieve
                that perfect texture.
              </p>

              <Link
                to={"/"}
                className="text-primary-500 font-semibold underline hover:text-primary"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>

        {/* right aside-------------- */}
        <div className="pl-16  border-dashed border-l-2 hidden lg:block">
          {/* Search----------- */}
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>

          {/* Blog Categories--------- */}
          <div className="my-5">
            <h3 className="text-xl text-primary font-bold">Blog Categories</h3>
            <hr className="my-5" />
            <ul className="list-disc ml-5">
              <li>Dairy Farm (3)</li>
              <li>Decoration (2)</li>
              <li>Grocery & Staples (1)</li>
              <li>Healthy Foods (3)</li>
              <li>Package Foods (2)</li>
              <li>Lifestyle (3)</li>
              <li>Uncategorized (17)</li>
            </ul>
          </div>

          {/* Recent Posts-------- */}
          <div className="my-5">
            <h3 className="text-xl text-primary font-bold">Recent Posts</h3>
            <hr className="my-5" />
            <div className="grid grid-cols-3 gap-5">
              <div className="h-[80px] w-[100px] rounded-lg overflow-hidden">
                <img src={blog1} alt="" className="w-auto h-full" />
              </div>
              <div className="col-span-2">
                <h3 className="font-bold">
                  Easy, soft and crispy chocolate croissants
                </h3>
                <p className="text-xs">October 25, 2022</p>
              </div>
            </div>
          </div>

          {/* Tags-------- */}
          <div className="my-5 w-full">
            <h3 className="text-xl text-primary font-bold">Tags</h3>
            <hr className="my-5" />
          

              <div className="badge hover:bg-primary-100 py-3 px-4 m-1">Business</div>
              <div className="badge hover:bg-primary-100 py-3 px-4 m-1">healthy</div>
              <div className="badge hover:bg-primary-100 py-3 px-4 m-1">
                natural
              </div>
              <div className="badge hover:bg-primary-100 py-3 px-4 m-1">organic</div>
              <div className="badge hover:bg-primary-100 py-3 px-4 m-1">posts</div>
              <div className="badge hover:bg-primary-100 py-3 px-4 m-1">tomato</div>
            </div>
       
        </div>
      </div>
    </div>
  );
};

export default BlogBody;
