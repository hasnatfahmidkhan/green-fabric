import Container from "@/components/Container";
import ProtectedRoutes from "@/components/ProtectedRoutes";
import ProductDetailsCard from "@/components/ui/ProductDetailsCard/ProductDetailsCard";
import Image from "next/image";

export default async function page({ params }) {
  const { id } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/t-shirts/${id}`);
  const data = await res.json();
  const product = data[0];
  const { title, image } = product;

  return (
    <ProtectedRoutes>
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-2 items-stretch gap-8 md:gap-10">
          {/* Image container */}
          <div className="relative w-full h-full min-h-80 md:min-h-[500px] rounded-xl overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          {/* Details  */}
          <ProductDetailsCard product={product} />
        </div>
      </Container>
    </ProtectedRoutes>
  );
}
