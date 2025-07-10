import { createFileRoute } from "@tanstack/react-router";
import Products from "../features/products";
import { Suspense } from "react";

export const Route = createFileRoute("/products")({
  component: ProductsRoute,
});

function ProductsRoute() {
  return (
    <div className="p-2">
      <Suspense fallback={<div>This component is loading!</div>}>
        <Products />
      </Suspense>
    </div>
  );
}
