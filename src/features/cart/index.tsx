import { getProducts } from "@/api/products/product-api";
import { useSuspenseQuery } from "@tanstack/react-query";
import Product from "../products/product";
import { Button } from "@/components/ui/button";
import useShoppingStore from "@/store/shopping-store";
import CartItem from "./cart-item";

const Cart = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const products = useShoppingStore((state) => state.products);
  const addProduct = useShoppingStore((state) => state.addProduct);
  const removeProduct = useShoppingStore((state) => state.removeProduct);

  console.log("products", products);

  return (
    <div>
      <div className="flex gap-2">
        {data?.map((product) => {
          return (
            <div className="flex flex-col gap-2">
              <Product key={product.id} id={product.id} url={product.url} />
              <Button onClick={() => addProduct(product)}>Add to cart</Button>
            </div>
          );
        })}
      </div>
      <div className="pt-10">
        Amount of products in my cart: {products?.length}
        {products?.map((product) => {
          return (
            <div className="flex flex-col gap-2 w-fit">
              <CartItem id={product.id} url={product.url}></CartItem>
              <Button onClick={() => removeProduct(product)}>
                Remove from cart
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
