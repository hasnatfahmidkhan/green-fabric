import PrimaryBtn from "@/components/PrimaryBtn";
import Image from "next/image";

export default function FeaturedCard({ tShirt }) {
  const { category, title, shortDescription, price, image } = tShirt;
  return (
    <div className="card bg-base-100 shadow-xl border border-gray-100">
      <div className=" p-4">
        <figure className="relative w-full h-64 rounded-lg overflow-hidden">
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
          <div className="badge bg-green-100 border-none shadow-xl text-green-600">
            {category}
          </div>
          <span className="font-semibold text-lg">${price}</span>
        </div>
        <h2 className="card-title">{title}</h2>
        <p>{shortDescription}</p>
        <div className="card-actions">
          <PrimaryBtn className={"w-full"}>View Details</PrimaryBtn>
        </div>
      </div>
    </div>
  );
}
