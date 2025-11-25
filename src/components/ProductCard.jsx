import PrimaryBtn from "@/components/PrimaryBtn";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ tShirt }) {
  const { _id, category, title, shortDescription, price, image } = tShirt;
  return (
    <div className="card bg-base-100 shadow-xl border border-gray-100">
      <div className="px-4 pt-4">
        <figure className="relative w-full h-52 md:h-64 rounded-lg overflow-hidden">
          <Image
            fill
            src={image}
            alt={title}
            style={{ objectFit: "cover" }} // ensures image covers the area
          />
        </figure>
      </div>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <div className="badge bg-teal-100 border-none shadow-xl text-teal-600">
            {category}
          </div>
          <span className="font-semibold text-lg">${price}</span>
        </div>
        <h2 className="card-title truncate text-ellipsis">{title}</h2>
        <p className="truncate text-ellipsis">{shortDescription}</p>

        <div className="card-actions">
          <Link className="w-full" href={`/products/${_id}`}>
            <PrimaryBtn className={"w-full"}>View Details</PrimaryBtn>
          </Link>
        </div>
      </div>
    </div>
  );
}
