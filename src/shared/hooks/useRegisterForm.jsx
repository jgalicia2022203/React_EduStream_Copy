import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  birthday: yup.date().required("Birthday is required"),
  phone: yup.string().required("Phone is required"),
});

const useRegisterForm = (onClose) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Lógica para registrar al usuario
    console.log(data);
    toast.success("Registered successfully");
    onClose();
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};

export default useRegisterForm;
