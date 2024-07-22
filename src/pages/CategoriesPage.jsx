import React, { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard";
import { getCategories } from "../services/api";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="p-4">
      <h1 className="mb-4 text-3xl font-bold">Browse</h1>
      <input
        type="text"
        placeholder="Search Category Tags"
        className="w-full p-2 mb-4 border rounded"
      />
      <div className="grid grid-cols-3 gap-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
