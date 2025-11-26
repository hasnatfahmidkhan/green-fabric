"use client";
import Heading from "@/components/Heading";
import { useAxiosSecure } from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import ProductCard from "../../ProductCard";

export default function FeaturedProduct() {
  const axiosSecure = useAxiosSecure();
  const { data: tShirts = [], isLoading } = useQuery({
    queryKey: ["t-shirts"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        "/t-shirts?isFeatured=true&limit=6"
      );
      return data;
    },
  });

  return (
    <section>
      <div className="heading-container mb-10">
        <Heading>Featured Products</Heading>
        <p className="sub-heading">
          Premium Quality Comfort and Style Every Stitch Designed for You
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {tShirts?.map((tShirt) => (
          <ProductCard key={tShirt._id} tShirt={tShirt} />
        ))}
      </div>
    </section>
  );
}
