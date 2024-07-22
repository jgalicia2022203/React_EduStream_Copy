import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/category/${category._id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col items-center justify-center w-48 h-64 p-4 border rounded cursor-pointer hover:shadow-lg"
    >
      <img
        src={category.image}
        alt={category.name}
        className="object-cover w-32 h-64 mb-2"
      />
      <h2 className="text-xl font-bold text-center">{category.name}</h2>
    </div>
  );
};

export default CategoryCard;
