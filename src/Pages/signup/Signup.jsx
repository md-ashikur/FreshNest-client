import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AiFillEye } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";


const Signup = () => {
  // show Password start===================
  const [passwordShown, setPasswordShown] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { createUser, user } = useAuth();
  const navigate = useNavigate();


  
  const from = "/login";
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
  

    createUser(email, password);
    if (user) {
      navigate(from);
    }
    reset();
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <section className="py-20  px-20 bg-[#e5f0fd]">
      <div className="w-[40vw] bg-white mx-auto my-7 p-10 rounded-lg">
        <h3 className="text-center">Sign Up</h3>

        {/* form-------------- */}
        <form onSubmit={handleSubmit(onSubmit)} className="my-5">
          {/* first name------- */}
          <div>
            <input
              placeholder="Fisrt name*"
              className="outline-none border-inherit border my-2 px-5 py-3 w-full h-[50px] rounded-2xl"
              {...register("firstName", {
                required: "Your first name is required",
              })}
              aria-invalid={errors.firstName ? "true" : "false"}
            />
            {errors.firstName && (
              <p role="alert" className="pl-2 text-red-500 text-xs ">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* last name------- */}
          <div>
            <input
              placeholder="Last name*"
              className="outline-none border-inherit border my-2 px-5 py-3 w-full h-[50px] rounded-2xl"
              {...register("lastName", {
                required: "Your last name is required",
              })}
              aria-invalid={errors.lastName ? "true" : "false"}
            />
            {errors.lastName && (
              <p role="alert" className="pl-2 text-red-500 text-xs ">
                {errors.lastName.message}
              </p>
            )}
          </div>
          {/* email-------------- */}
          <div>
            <input
              placeholder="Email*"
              className="outline-none px-5 border-inherit border my-2 py-3 w-full h-[50px] rounded-2xl"
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
          {/* password----------------- */}
          <div>
            <div className="flex items-center relative">
              <input
                name="password"
                type={passwordShown ? "text" : "password"}
                className="outline-none px-5 border-inherit border my-2 py-3 w-full h-[50px] rounded-2xl"
                placeholder="Password*"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
                    message:
                      "must contain at least 1 uppercase[A-Z], 1 lowercase[a-z], and 1 number",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be at least 6 characters long",
                  },
                })}
              />
              {passwordShown ? (
                <AiFillEye
                  onClick={togglePassword}
                  className="absolute right-3 text-xl text-primary"
                />
              ) : (
                <AiFillEye
                  onClick={togglePassword}
                  className="absolute right-3  text-xl hover:text-primary"
                />
              )}
            </div>
            {errors.password && (
              <p role="alert" className="pl-2 text-red-500 text-xs mb-2">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* check box-------------- */}
          <div className="flex items-center my-3">
            <input
              className="m-2 "
              type="checkbox"
              id="terms"
              value="checkbox"
            />
            <label htmlFor="terms" className="text-sm ">
              By signing up, you agree to our terms and privacy policy.
            </label>
          </div>

          <input
            type="submit"
            value="Sign Up"
            className="hover:scale-[1.04] transition duration-150 ease-in-out bg-secondary h-[60px] px-7 w-full rounded-xl text-base"
          />
        </form>

        <p className="text-center text-slate-700">
          Already Have an Account?
          <Link to={"/login"}>
            <span className="text-secondary"> Login</span>
          </Link>
        </p>

        {/* --------------or--------------- */}
        <div className="my-3 flex justify-center items-center">
          <div className="w-60 h-0.5 bg-black opacity-10"></div>
          <span className="mx-3">or </span>
          <div className="w-60 h-0.5 bg-black opacity-10"></div>
        </div>

        <div className="flex justify-center gap-5">
          <button
            className="border border-[#3554d1] px-7 py-2 w-[200px] rounded-lg text-[#3554d1]  
          hover:bg-[#3554d1] hover:text-white flex items-center gap-3 justify-center"
          >
            <FaFacebookF /> Facebook
          </button>
          <button className="border border-[#d93025] px-7 py-2 w-[200px] rounded-lg text-[#d93025] hover:bg-[#d93025] hover:text-white flex items-center gap-3 justify-center">
            <FaGoogle />
            Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Signup;