"use client";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import ProductCard from "@/components/ProductCard";
import { useAxiosSecure } from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function Products() {
  const axiosSecure = useAxiosSecure();
  const { data: tShirts = [], isLoading } = useQuery({
    queryKey: ["t-shirts"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/t-shirts");
      return data;
    },
  });
  return (
    <Container>
      <div className="max-w-4xl mx-auto">
        <Heading>All Products</Heading>
        <p className="sub-heading">Quality you can feel in every stitch</p>
      </div>

      <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tShirts?.map((tShirt) => (
            <ProductCard key={tShirt._id} tShirt={tShirt} />
          ))}
        </div>
      </div>
    </Container>
  );
}
