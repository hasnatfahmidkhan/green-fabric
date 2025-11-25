"use client";
import Container from "@/components/Container";
import { uploadImage } from "@/utils";
import Image from "next/image";
import {
  Upload,
  Package,
  Tag,
  DollarSign,
  Grid3x3,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { FiImage } from "react-icons/fi";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAxiosSecure } from "@/hooks/useAxiosSecure";
import toast from "react-hot-toast";

export default function AddProduct() {
  const [preview, setPreview] = useState(null);
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();
  const queryClient = useQueryClient();
  const {
    isPending,
    mutate,
    reset: mutationReset,
  } = useMutation({
    mutationFn: async (payload) => {
      const { data } = await axiosSecure.post("/t-shirts", payload);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["t-shirts"] });
      toast.success("Product added successfully");
      mutationReset();
    },
  });

  const onSubmit = async (data) => {
    const {
      title,
      shortDescription,
      fullDescription,
      price,
      category,
      sizes,
      isFeatured,
      stock,
      specification,
      image,
    } = data;

    // Image file
    const file = image[0];

    const imageUrl = await uploadImage(file);

    // Final product object
    const product = {
      title,
      shortDescription,
      fullDescription,
      price: Number(price),
      category,
      sizes,
      isFeatured: isFeatured === "yes",
      stock: Number(stock),
      specification: (specification || "")
        .split("/n")
        .map((l) => l.trim())
        .filter((l) => l !== ""),
      image: imageUrl,
    };

    mutate(product);

    reset();
    setPreview(null);
  };

  const handleImagePreview = (e, field) => {
    field.onChange(e.target.files);
    const file = e.target.files?.[0];
    if (!file) return setPreview(null);

    if (
      !(
        file.type.endsWith("/png") ||
        file.type.endsWith("/jpg") ||
        file.type.endsWith("/jpeg")
      )
    ) {
      return setPreview(null);
    }

    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  return (
    <Container>
      <div className="bg-linear-to-br from-slate-50 via-blue-50 to-slate-50 py-12 px-4 rounded-2xl">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <h1 className="text-4xl font-bold text-secondary">
                Add New Product
              </h1>
            </div>
            <p className="text-slate-600 ml-12">
              Create and manage your product listings
            </p>
          </div>

          {/* Main Form Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100">
            <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-8">
              {/* Section 1: Basic Information */}
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <Tag className="w-5 h-5 text-blue-600" />
                  <h2 className="text-lg font-semibold text-secondary">
                    Basic Information
                  </h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Product Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("title", {
                        required: "Title is required",
                        minLength: {
                          value: 15,
                          message: "Title minimum 15 character",
                        },
                      })}
                      type="text"
                      placeholder="Enter product title (e.g., Premium Cotton Polo)"
                      className="input input-bordered w-full focus:input-primary transition-all"
                    />
                    {errors.title && (
                      <span className="text-red-500 text-xs">
                        {errors.title?.message}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Short Description{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        {...register("shortDescription", {
                          required: "Short description is required",
                          minLength: {
                            value: 20,
                            message: "Short description minimum 20 character",
                          },
                        })}
                        type="text"
                        placeholder="Brief overview"
                        className="input input-bordered w-full focus:input-primary transition-all"
                      />
                      {errors.shortDescription && (
                        <span className="text-red-500 text-xs">
                          {errors.shortDescription?.message}
                        </span>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Category <span className="text-red-500">*</span>
                      </label>
                      <select
                        {...register("category", {
                          required: "category is required",
                        })}
                        className="select select-bordered w-full focus:select-primary transition-all"
                      >
                        <option value="" disabled>
                          Select Category
                        </option>
                        <option value="Polo">Polo</option>
                        <option value="Half Sleeve">Half Sleeve</option>
                        <option value="Full Sleeve">Full Sleeve</option>
                        <option value="Oversized">Oversized</option>
                      </select>
                      {errors.category && (
                        <span className="text-red-500 text-xs">
                          {errors.category?.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Full Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      {...register("fullDescription", {
                        required: "Full description is required",
                        minLength: {
                          value: 50,
                          message: "Full description minimum 50 character",
                        },
                      })}
                      placeholder="Detailed product description, features, and benefits..."
                      className="textarea textarea-bordered w-full focus:textarea-primary transition-all"
                      rows={4}
                    ></textarea>
                    {errors.fullDescription && (
                      <span className="text-red-500 text-xs">
                        {errors.fullDescription?.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="divider my-6"></div>

              {/* Section 2: Pricing & Inventory */}
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  <h2 className="text-lg font-semibold text-secondary">
                    Pricing & Inventory
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Price (USD) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-slate-500">
                        $
                      </span>
                      <input
                        {...register("price", {
                          required: "Price is required",
                        })}
                        type="number"
                        step="0.01"
                        placeholder="0.00"
                        className="input input-bordered w-full pl-7 focus:input-primary transition-all"
                      />
                      {errors.price && (
                        <span className="text-red-500 text-xs">
                          {errors.price?.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Stock Quantity <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("stock", {
                        required: "Stock Quantity is required",
                      })}
                      type="number"
                      placeholder="0"
                      className="input input-bordered w-full focus:input-primary transition-all"
                    />
                    {errors.stock && (
                      <span className="text-red-500 text-xs">
                        {errors.stock?.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="divider my-6"></div>

              {/* Section 3: Product Variants */}
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <Grid3x3 className="w-5 h-5 text-purple-600" />
                  <h2 className="text-lg font-semibold text-secondary">
                    Product Variants
                  </h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3">
                      Available Sizes
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {["M", "L", "XL", "XXL"].map((size) => (
                        <label
                          key={size}
                          className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 cursor-pointer transition-all"
                        >
                          <input
                            {...register("sizes", {
                              required: "Sizes are required",
                            })}
                            type="checkbox"
                            value={size}
                            className="checkbox checkbox-primary"
                          />
                          <span className="font-medium text-slate-700">
                            {size}
                          </span>
                        </label>
                      ))}
                      {errors.sizes && (
                        <span className="text-red-500 text-xs">
                          {errors.sizes?.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3">
                      Is Featured?
                    </label>

                    <div className="p-3 border border-slate-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 cursor-pointer transition-all">
                      <select
                        {...register("isFeatured")}
                        className="w-full bg-transparent outline-none"
                      >
                        <option value="" disabled>
                          Select Featured Status
                        </option>
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="divider my-6"></div>

              {/* Section 4: Specifications & Images */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-5 h-5 text-amber-600" />
                    <h2 className="text-lg font-semibold text-secondary">
                      Specifications
                    </h2>
                  </div>
                  <textarea
                    {...register("specification", {
                      required: "specification is required",
                    })}
                    placeholder="Enter specifications (one per line)&#10;Example:&#10;100% Cotton&#10;Machine Washable&#10;Available in 5 colors"
                    rows={6}
                    className="textarea textarea-bordered w-full focus:textarea-primary transition-all"
                  ></textarea>
                  {errors.specification && (
                    <span className="text-red-500 text-xs">
                      {errors.specification?.message}
                    </span>
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <FiImage className="w-5 h-5 text-orange-600" />
                    <h2 className="text-lg font-semibold text-secondary">
                      Product Image
                    </h2>
                  </div>

                  <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-blue-400 hover:bg-blue-50 transition-all cursor-pointer group">
                    <Controller
                      name="image"
                      control={control}
                      rules={{
                        required: "Image is required",
                        validate: (value) => {
                          if (!value || value.length === 0) {
                            return "Your photo required";
                          }
                          const file = value[0];
                          if (!file.type.startsWith("image/")) {
                            return "Please select an image file";
                          }
                          if (
                            !(
                              file.type.endsWith("/png") ||
                              file.type.endsWith("/jpg") ||
                              file.type.endsWith("/jpeg")
                            )
                          ) {
                            return "Please select an image file of png jpg jpeg";
                          }
                          const maxSize = 5 * 1024 * 1024;
                          if (file.size > maxSize) {
                            return `File size must be less than 5 MB. Your file size is ${(
                              file.size /
                              (1024 * 1024)
                            ).toFixed(2)} MB`;
                          }
                          return true;
                        },
                      }}
                      render={({ field }) => (
                        <>
                          <input
                            name={field.name}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            id="image-upload"
                            onChange={(e) => handleImagePreview(e, field)}
                          />
                          <label
                            htmlFor="image-upload"
                            className="flex flex-col items-center gap-3 cursor-pointer"
                          >
                            <div className="p-3 bg-blue-100 group-hover:bg-blue-200 rounded-lg transition-all">
                              <Upload className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-secondary">
                                Click to upload
                              </p>
                              <p className="text-xs text-slate-500">
                                PNG, JPG, JPEG up to 5MB
                              </p>
                            </div>
                          </label>
                        </>
                      )}
                    />
                  </div>
                  {errors.image && (
                    <span className="text-red-500 text-xs">
                      {errors.image?.message}
                    </span>
                  )}

                  {/* Image live feature preview  */}
                  {preview && (
                    <div className="mt-6">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        <p className="font-semibold text-secondary">Preview</p>
                      </div>
                      <div className="relative inline-block">
                        <Image
                          src={preview}
                          alt="Preview"
                          width={150}
                          height={150}
                          className="object-cover rounded-xl border-2 border-blue-200 shadow-md"
                        />
                        <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1">
                          <CheckCircle2 className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button className="btn btn-primary w-full h-12 text-base font-semibold rounded-lg hover:shadow-lg transition-all">
                  <Package className="w-5 h-5" />
                  {isPending ? (
                    <span className="loading-spinner">
                      <span>Loading...</span>
                    </span>
                  ) : (
                    "Add Product"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}
