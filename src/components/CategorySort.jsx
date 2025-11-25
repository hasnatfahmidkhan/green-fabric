"use client";

import { useAxiosSecure } from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

export default function CategorySort({ setCategory }) {
  const axiosSecure = useAxiosSecure();
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/categories");
      return data;
    },
  });
  return (
    <select
      onChange={(e) => setCategory(e.target.value)}
      className="select select-primary w-fit"
      defaultValue={""}
    >
      <option disabled={true} value={""}>
        Select Category
      </option>
      {categories?.map((cat) => (
        <option value={cat.name} key={cat._id}>
          {cat.name}
        </option>
      ))}
    </select>
  );
}
