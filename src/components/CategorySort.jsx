"use client";

import { useAxiosSecure } from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

export default function CategorySort() {
  const axiosSecure = useAxiosSecure();
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/categories");
      return data;
    },
  });
  return (
    <select className="select select-primary w-fit" defaultValue={""}>
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
