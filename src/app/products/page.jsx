"use client";
import React, { useState, useEffect } from "react";
import CategorySort from "@/components/CategorySort";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import ProductCard from "@/components/ProductCard";
import Search from "@/components/Search";
import { useAxiosSecure } from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import noData from "../../../public/nodata.json";
import Lottie from "lottie-react";

export default function Products() {
  const [inputValue, setInputValue] = useState(""); // raw input
  const [search, setSearch] = useState(""); // debounced value
  const [sort, setSort] = useState("");
  const [order, setOrder] = useState("");
  const [category, setCategory] = useState("");
  const axiosSecure = useAxiosSecure();

  // Update search state with debounce
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearch(inputValue);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  const { data: tShirts = [], isLoading } = useQuery({
    queryKey: ["t-shirts", sort, order, category, search],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/t-shirts?sort=${sort}&order=${order}&category=${category}&search=${search}`
      );
      return data;
    },
  });

  const handleSelect = (e) => {
    const [sortText, orderText] = e.target.value.split("-");
    setSort(sortText);
    setOrder(orderText);
  };

  const handleSearch = (e) => {
    setInputValue(e.target.value); // immediate update
  };

  return (
    <Container className="space-y-16">
      <div className="heading-container">
        <Heading>All Products</Heading>
        <p className="sub-heading">Quality you can feel in every stitch</p>
      </div>

      <div className="space-y-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-0">
          <Search handleSearch={handleSearch} value={inputValue} />
          <div className="flex items-center gap-4 ">
            <CategorySort setCategory={setCategory} />
            <select
              onChange={handleSelect}
              className="select select-primary w-fit"
              defaultValue={""}
            >
              <option disabled value="">
                Sort By Price
              </option>
              <option value="">All</option>
              <option value="price-asc">Low to High</option>
              <option value="price-desc">High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {isLoading ? (
            <div className="col-span-full flex items-center justify-center">
              <span className="loading loading-bars loading-xl text-primary"></span>
            </div>
          ) : tShirts.length <= 0 ? (
            <div className="pt-10 col-span-full flex items-center justify-center">
              <Lottie
                animationData={noData}
                loop={true}
                className="w-sm h-full relative"
              />
            </div>
          ) : (
            tShirts.map((tShirt) => (
              <ProductCard key={tShirt._id} tShirt={tShirt} />
            ))
          )}
        </div>
      </div>
    </Container>
  );
}
