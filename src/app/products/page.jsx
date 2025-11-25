"use client";
import CategorySort from "@/components/CategorySort";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import ProductCard from "@/components/ProductCard";
import Search from "@/components/Search";
import { useAxiosSecure } from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import noData from "../../../public/nodata.json";
import Lottie from "lottie-react";
export default function Products() {
  const [sort, setSort] = useState("");
  const [order, setOrder] = useState("");
  const [category, setCategory] = useState("");
  const axiosSecure = useAxiosSecure();

  const { data: tShirts = [], isLoading } = useQuery({
    queryKey: ["t-shirts", sort, order, category],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/t-shirts?sort=${sort}&order=${order}&category=${category}`
      );
      return data;
    },
  });
  console.log(tShirts.length);

  const handleSelect = (e) => {
    const sortText = e.target.value;
    setSort(sortText.split("-")[0]);
    setOrder(sortText.split("-")[1]);
  };

  return (
    <Container>
      <div className="max-w-4xl w-full mx-auto">
        <Heading>All Products</Heading>
        <p className="sub-heading">Quality you can feel in every stitch</p>
      </div>

      <div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-0">
          <Search />
          <div className="flex items-center gap-4 ">
            <CategorySort setCategory={setCategory} />
            <select
              onChange={handleSelect}
              className="select select-primary w-fit"
              defaultValue={""}
            >
              <option disabled={true} value={""}>
                Sort By Price
              </option>
              <option value="price-asc">Low to High</option>
              <option value="price-desc">High to Low</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tShirts.length <= 0 ? (
            <div className="pt-10 col-span-full flex items-center justify-center ">
              <Lottie
                animationData={noData}
                loop={true}
                className="w-sm h-full relative "
              />
            </div>
          ) : (
            tShirts?.map((tShirt) => (
              <ProductCard key={tShirt._id} tShirt={tShirt} />
            ))
          )}
        </div>
      </div>
    </Container>
  );
}
