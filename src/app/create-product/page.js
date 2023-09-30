"use client";

import Header from "@/components/Header/Header";
import { Layout } from "@/components/Layout/Layout";
import { randomId } from "@/utils/utils";
import React, { useState } from "react";

const Products = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    image: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    let products = JSON.parse(localStorage.getItem("products")) || [];
    products = [...products, { ...formData, id: randomId() }];
    localStorage.setItem("products", JSON.stringify(products));
    setFormData({
      name: "",
      description: "",
      price: "",
      category: "",
      stock: "",
      image: "",
    });
    alert("Product added successfully!");
  };

  return (
    <div className="flex bg-white">
      <Layout />
      <section className="w-full">
        <Header title={"Add New Product"} />
        <div className="p-4 pl-6 flex justify-center items-center">
          <form
            onSubmit={onSubmit}
            className="flex flex-col justify-center items-center bg-blue-400 w-[350px] rounded-md mt-10"
          >
            <div className="flex flex-col mb-3 mt-5">
              <label className="text-white">Name</label>
              <input
                value={formData.name}
                required
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                type="text"
                className="border border-gray-600 focus:border-gray-700 rounded-md px-2 py-1 text-gray-700 w-auto"
              />
            </div>
            <div className="flex flex-col mb-3">
              <label className="text-white">Price</label>
              <input
                value={formData.price}
                required
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
                type="text"
                className="border border-gray-600 focus:border-gray-700 rounded-md px-2 py-1 text-gray-700 w-auto"
              />
            </div>
            <div className="flex flex-col mb-3">
              <label className="text-white">Category</label>
              <input
                value={formData.category}
                required
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                type="text"
                className="border border-gray-600 focus:border-gray-700 rounded-md px-2 py-1 text-gray-700 w-auto"
              />
            </div>
            <div className="flex flex-col mb-3">
              <label className="text-white">Description</label>
              <textarea
                value={formData.description}
                required
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                type="text"
                className="border border-gray-600 focus:border-gray-700 rounded-md px-2 py-1 text-gray-700 w-[237px]"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-white">Stock</label>
              <input
                value={formData.stock}
                required
                onChange={(e) =>
                  setFormData({ ...formData, stock: e.target.value })
                }
                type="text"
                className="border border-gray-600 focus:border-gray-700 rounded-md px-2 py-1 text-gray-700 w-auto"
              />
            </div>
            <div className="flex flex-col mb-6 ml-[103px]">
              <label className="text-white">Image</label>
              <input
                value={formData.image}
                required
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
                type="file"
                id="imageInput"
                name="image"
                accept="image/*"
              />
            </div>
            <button
              type="submit"
              className="bg-zinc-50 rounded-md w-[235px] text-gray-600 mb-6 font-semibold transition hover:bg-gray-200"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Products;
