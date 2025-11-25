"use client";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Modal from "@/components/Modal";
import ProtectedRoutes from "@/components/ProtectedRoutes";
import { useAxiosSecure } from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { ReceiptText, Trash2 } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function ManageProducts() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedTshirt, setSelectedTshirt] = useState(null);
  const axiosSecure = useAxiosSecure();
  const {
    data: tShirts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["t-shirts"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/t-shirts");
      return data;
    },
  });

  const openModal = (tShirt) => {
    setIsOpenModal(true);
    setSelectedTshirt(tShirt);
  };

  const onConfirm = async () => {
    const { _id } = selectedTshirt;
    const { data } = await axiosSecure.delete(`/t-shirts/${_id}`);
    if (data.deletedCount) {
      toast.success("Delete Successfull");
      refetch();
      setIsOpenModal(false);
    }
  };

  return (
    <ProtectedRoutes>
      <Container>
        <div className="max-w-4xl mx-auto">
          <Heading>Manage Products</Heading>
          <p className="sub-heading">Manage Your Products</p>
        </div>
        <div className="overflow-x-auto ">
          <table className="table table-zebra">
            {/* head */}
            <thead className="bg-base-200">
              <tr>
                <th>SL</th>
                <th>Image</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {isLoading && (
                <span className="loading loading-bars loading-xl text-primary"></span>
              )}
              {tShirts?.map((tShirt, i) => {
                const { _id, image, title, stock, category, price } = tShirt;
                return (
                  <tr key={_id}>
                    <td>{i + 1}</td>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <Image fill src={image} alt={title} />
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-teal-100 text-xs">
                        {category}
                      </span>
                    </td>
                    <td>{stock}</td>
                    <td>${price}</td>
                    <th className="space-y-2">
                      <div className="tooltip tooltip-info" data-tip="View">
                        <button className="btn btn-ghost btn-xs hover:bg-transparent border-none text-primary">
                          <ReceiptText />
                        </button>
                      </div>
                      <div className="tooltip tooltip-error" data-tip="Delete">
                        <button
                          onClick={() => openModal(tShirt)}
                          className="btn btn-ghost btn-xs hover:bg-transparent border-none text-red-500"
                        >
                          <Trash2 />
                        </button>
                      </div>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Modal
            isOpen={isOpenModal}
            onCancel={() => setIsOpenModal(false)}
            onConfirm={onConfirm}
            message="You want this delete this T-shirt."
            icon={<Trash2 size={50} strokeWidth={1.3} />}
          />
        </div>
      </Container>
    </ProtectedRoutes>
  );
}
