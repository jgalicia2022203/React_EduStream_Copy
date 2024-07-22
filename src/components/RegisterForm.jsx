import React from "react";
import useRegisterForm from "../hooks/useRegisterForm";

const RegisterForm = ({ onClose }) => {
  const { register, handleSubmit, errors, onSubmit } = useRegisterForm(onClose);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-8 bg-[#ACBCCC] rounded-lg shadow-lg"
    >
      <h2 className="mb-6 text-3xl font-bold text-center text-[#000000]">
        <span className="inline-block mb-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/686/686051.png"
            alt="Graduation Cap"
            className="w-8 h-8 mx-auto"
          />
        </span>
        Join EduStream Today
      </h2>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-[#000000]">
          Username
        </label>
        <input
          name="username"
          {...register("username")}
          className="w-full px-3 py-2 text-[#000000] border-2 border-gray-400 rounded-md focus:outline-none focus:border-4 focus:border-[#395BBF] bg-transparent"
        />
        {errors.username && (
          <p className="mt-1 text-xs text-red-500">{errors.username.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-[#000000]">
          Password
        </label>
        <input
          type="password"
          name="password"
          {...register("password")}
          className="w-full px-3 py-2 text-[#000000] border-2 border-gray-400 rounded-md focus:outline-none focus:border-4 focus:border-[#395BBF] bg-transparent"
        />
        {errors.password && (
          <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-[#000000]">
          Email
        </label>
        <input
          name="email"
          {...register("email")}
          className="w-full px-3 py-2 text-[#000000] border-2 border-gray-400 rounded-md focus:outline-none focus:border-4 focus:border-[#395BBF] bg-transparent"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-[#000000]">
          Birthday
        </label>
        <input
          type="date"
          name="birthday"
          {...register("birthday")}
          className="w-full px-3 py-2 text-[#000000] border-2 border-gray-400 rounded-md focus:outline-none focus:border-4 focus:border-[#395BBF] bg-transparent"
        />
        {errors.birthday && (
          <p className="mt-1 text-xs text-red-500">{errors.birthday.message}</p>
        )}
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-bold text-[#000000]">
          Phone
        </label>
        <input
          name="phone"
          {...register("phone")}
          className="w-full px-3 py-2 text-[#000000] border-2 border-gray-400 rounded-md focus:outline-none focus:border-4 focus:border-[#395BBF] bg-transparent"
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
        )}
      </div>
      <p className="mb-4 text-xs text-[#000000] font-bold">
        EduStream puede usar tu teléfono para llamarte o enviarte mensajes de
        texto con información sobre tu cuenta. Al hacer clic en{" "}
        <span className="underline">Register</span>, aceptas los{" "}
        <span className="underline">Términos y Servicios</span> de Twitch y la
        aplicación del <span className="underline">Aviso de Privacidad</span>.
      </p>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="w-full px-4 py-2 font-bold text-white bg-[#395BBF] rounded-md hover:bg-blue-700 focus:outline-none"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
