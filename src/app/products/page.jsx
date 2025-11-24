import Container from "@/components/Container";
import Heading from "@/components/Heading";
import React from "react";

export default function Products() {
  return (
    <Container>
      <div className="max-w-4xl mx-auto">
        <Heading>All Products</Heading>
        <p className="sub-heading">Quality you can feel in every stitch.</p>
      </div>
    </Container>
  );
}
