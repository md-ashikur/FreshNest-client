import { useForm } from "react-hook-form";
import { AiFillEye } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";


const Login = () => {
  // show Password start===================
  const [passwordShown, setPasswordShown] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signIn, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
   
    await signIn(data.email, data.password);
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <section className="py-20  px-20 bg-[#e5f0fd]">
      <div className="w-[40vw] bg-white mx-auto my-7 p-10 rounded-lg">
        <h3 className="text-center">Login</h3>

        {/* form-------------- */}
        <form onSubmit={handleSubmit(onSubmit)} className="my-5">
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

          <input
            type="submit"
            value="Login"
            className="hover:scale-[1.04] transition duration-150 ease-in-out bg-secondary h-[60px] px-7 w-full rounded-xl text-base"
          />
        </form>

        <p className="text-center text-slate-700">
          Don&apos;t Have any Account?
          <Link to="/signup">
            <span className="text-secondary"> Sign Up</span>
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

export default Login;