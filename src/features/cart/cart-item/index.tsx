import Product from "@/features/products/product";

const CartItem = ({ id, url }: { id: string; url: string }) => {
  return <Product key={id} id={id} url={url} />;
};

export default CartItem;
