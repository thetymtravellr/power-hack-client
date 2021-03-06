import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerUser = (data) => {
    setIsLoading(true);
    const user = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    fetch("https://gentle-bastion-30357.herokuapp.com/registration", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "success") {
          localStorage.setItem("accessToken", data.token);
          localStorage.setItem("loggingEmail", data.email);
          setIsLoading(false);
          navigate("/");
        } else {
          setMessage(data.message);
          setIsLoading(false);
        }
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen flex items-center">
      <div className="w-full max-w-lg mx-auto">
        <h1 className="text-center text-3xl font-semibold mb-8">
          Register Form
        </h1>
        <form className="w-full" onSubmit={handleSubmit(registerUser)}>
          <div className="mb-5">
            <label for="name" className="block mb-2 font-bold text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter fullname"
              className={`border ${
                errors.fullname ? "border-red-500" : "border-gray-300"
              } shadow p-3 w-full rounded active:outline-none focus:outline-none`}
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="mb-5">
            <label for="email" className="block mb-2 font-bold text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              onClick={() => setMessage("")}
              className={`border ${
                (errors.email || message) ? "border-red-500" : "border-gray-300"
              } shadow p-3 w-full rounded active:outline-none focus:outline-none`}
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
            {message === "User already exist" && (
              <span className="text-red-500 font-semibold">{message}</span>
            )}
          </div>
          <div className="mb-5">
            <label
              for="password"
              className="block mb-2 font-bold text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              onClick={() => setMessage("")}
              placeholder="Enter password"
              className={`border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } shadow p-3 w-full rounded active:outline-none focus:outline-none`}
              {...register("password", { required: true, minLength: 6 })}
            />
            {errors.password?.type === "required" && (
              <span className="text-red-500">This field is required</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-red-500">
                Password must be 6 characters long
              </span>
            )}
            {message === "Something went wrong" && (
              <span className="text-red-500 font-semibold">{message}, try again</span>
            )}
          </div>
          <p>
            Already registered?{" "}
            <span className="text-emerald-500 font-medium">
              <Link to="/login">Login</Link>
            </span>
          </p>
          <div className="flex items-center justify-center p-6">
            <button
              className="bg-emerald-500 text-white 
                          active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
