import { useSuspenseQuery } from "@tanstack/react-query";
import Product from "./product";
import { getProducts } from "../../api/products/product-api";
import { columns } from "./columns";
import { DataTableServerSide } from "./data-table-server-side";
import paymentData from "./mock";
import { DataTableClientSide } from "./data-table-client-side";

const Products = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  console.log("query", data);
  return (
    <div className="flex gap-10">
      <div className="max-w-md">
        {data?.map((product) => {
          return <Product key={product.id} id={product.id} url={product.url} />;
        })}
      </div>
      <DataTableServerSide columns={columns} data={[]} />
      <DataTableClientSide columns={columns} data={paymentData} />
    </div>
  );
};

export default Products;
