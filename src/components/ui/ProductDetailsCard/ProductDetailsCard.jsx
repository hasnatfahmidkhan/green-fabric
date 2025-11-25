"use client";
import InfoModal from "@/components/InfoModal";
import PrimaryBtn from "@/components/PrimaryBtn";
import { Info } from "lucide-react";
import { useState } from "react";

export default function ProductDetailsCard({ product }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const {
    title,
    category,
    price,
    shortDescription,
    fullDescription,
    isFeatured,
    sizes,
    specification,
  } = product;
  const sp = specification.split("\n");

  const openModal = () => {
    setIsOpenModal(true);
  };

  return (
    <>
      {/* Details */}
      <div className="flex flex-col justify-center gap-6 xl:py-4">
        <div className="space-y-5">
          <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
          <div className="space-y-3">
            <p className="text-4xl font-semibold">${price}</p>
            <p className="text-accent text-sm">{shortDescription}</p>
            <div className="flex items-center gap-2">
              <span className="badge bg-teal-100 text-teal-700">
                {category}
              </span>

              {isFeatured && (
                <span className="badge bg-teal-100 text-teal-700">
                  Featured
                </span>
              )}
            </div>
          </div>
        </div>
        <form className="flex flex-col items-start gap-y-2">
          <label htmlFor="size" className="text-secondary">
            Select Size:
          </label>
          <div className="flex flex-wrap gap-2">
            {sizes?.map((size, i) => (
              <input
                id="size"
                key={i}
                className="btn btn-outline btn-primary w-16"
                type="checkbox"
                name="frameworks"
                aria-label={size}
              />
            ))}
          </div>
        </form>
        <div className="space-y-1">
          <p className="text-secondary">Descripiton: </p>
          <p className="text-secondary text-sm text-justify leading-6">
            {fullDescription}
          </p>
        </div>
        <div className="space-y-1">
          <p>Specificaion:</p>
          <ul className="list-disc list-inside space-y-1">
            {sp?.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-3 justify-end">
          <button onClick={openModal} className="btn btn-primary btn-outline">
            Add To Cart
          </button>
          <PrimaryBtn onClick={openModal}>Buy Now</PrimaryBtn>
        </div>
      </div>
      <InfoModal
        icon={<Info size={80} strokeWidth={1} />}
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      />
    </>
  );
}
