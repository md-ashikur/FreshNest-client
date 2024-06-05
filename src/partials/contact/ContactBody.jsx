import { Link } from "react-router-dom";
import contact1 from "../../images/contact/contact1.jpg";
import { useForm } from "react-hook-form";

const ContactBody = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="lg:h-[50vh] h-[20vh] px-10 bg-secondary flex items-center">
        <div>
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-5 lg:p-16 p-5">
        <div>
          <img src={contact1} alt="" />
        </div>
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-primary">
            We Love to Hear From You
          </h2>
          <p className="my-5">
            At FreshNest, your feedback is our inspiration. Connect with us to
            share your thoughts, suggestions, or just say hello!
          </p>

          <div className="grid lg:grid-cols-2">
            <div>
              <h3 className="text-md font-bold">OUR STORE</h3>
              <p>Box 565, New town, USA</p>

              <div className="my-5">
                <h3 className="text-md font-bold">CONTACT INFORMATION</h3>
                <p>(+880) 1905-462300</p>
                <p>info@example.com</p>
              </div>
            </div>
            <div>
              <div>
                <h3 className="text-md font-bold">OUR BUSINESS HOURS</h3>
                <p>Monday - Friday</p>
                <p>8am - 4pm</p>
                <p>Saturday, Sunday</p>
                <p>9am - 5pm</p>
              </div>
            </div>
          </div>
          <hr className="my-5" />
          {/* form------------- */}
          <div>
            <h2 className="text-3xl font-bold text-primary">Leave A Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="my-5">
              {/* name-------------- */}
              <div className="my-2">
                <input
                  placeholder="Your Name"
                  className="outline-none px-5 border-inherit border py-3 w-full h-[50px] rounded-2xl"
                  type="text"
                  {...register("name", {
                    required: "Your Name is required",
                  })}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p role="alert" className="pl-2 text-red-500 text-xs ">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* email-------------- */}
              <div className="my-2">
                <input
                  placeholder="Email"
                  className="outline-none px-5 border-inherit border py-3 w-full h-[50px] rounded-2xl"
                  type="email"
                  {...register("email", {
                    required: "Your Email Address is required",
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p role="alert" className="pl-2 text-red-500 text-xs ">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Subject-------------- */}
              <div className="my-2">
                <input
                  placeholder="Subject"
                  className="outline-none px-5 border-inherit border py-3 w-full h-[50px] rounded-2xl"
                  type="subtext"
                  {...register("subject", {
                    required: "Your Subject is required",
                  })}
                  aria-invalid={errors.subject ? "true" : "false"}
                />
                {errors.subject && (
                  <p role="alert" className="pl-2 text-red-500 text-xs ">
                    {errors.subject.message}
                  </p>
                )}
              </div>
              {/* message-------------- */}
              <div className="my-2">
                <textarea
                  placeholder="Message"
                  className="outline-none px-5 border-inherit border  py-3 w-full h-[150px] rounded-2xl"
                  type="text"
                  {...register("msg", {
                    required: "Your Message is required",
                  })}
                  aria-invalid={errors.msg ? "true" : "false"}
                />
                {errors.msg && (
                  <p role="alert" className="pl-2 text-red-500 text-xs ">
                    {errors.msg.message}
                  </p>
                )}
              </div>

              <button>
                <input
                  type="submit"
                  value="Submit"
                  className="hover:scale-[1.04] transition duration-150 ease-in-out bg-primary-500 h-[50px] text-xl px-16 w-full rounded-full text-base"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBody;
