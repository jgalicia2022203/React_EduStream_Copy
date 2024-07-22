import React from "react";
import useLoginForm from "../shared/hooks/useLoginForm";

const LoginForm = ({ onClose }) => {
  const { register, handleSubmit, errors, onSubmit } = useLoginForm(onClose);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-8 bg-white rounded-lg shadow-lg"
    >
      <h2 className="mb-6 text-2xl font-bold text-center text-blue-600">
        <span className="inline-block mb-2">
          <svg
            className="w-8 h-8 mx-auto"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 14l-4-4-4 4"
            ></path>
          </svg>
        </span>
        Log In on EduStream
      </h2>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700">
          Username
        </label>
        <input
          name="username"
          {...register("username")}
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
        />
        {errors.username && (
          <p className="mt-1 text-xs text-red-500">{errors.username.message}</p>
        )}
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-bold text-gray-700">
          Password
        </label>
        <input
          type="password"
          name="password"
          {...register("password")}
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
        />
        {errors.password && (
          <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none"
        >
          Log In
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
