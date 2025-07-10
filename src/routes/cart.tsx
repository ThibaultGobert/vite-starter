import { Spinner } from "@/components/ui/spinner";
import Cart from "@/features/cart";
import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";

export const Route = createFileRoute("/cart")({
  component: CartRoute,
});

function CartRoute() {
  return (
    <div className="p-5">
      <Suspense fallback={<Spinner />}>
        <Cart></Cart>
      </Suspense>
    </div>
  );
}
