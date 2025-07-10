import paymentData from "@/features/products/mock";
import axiosInstance from "../base-api";

type PageDataType = {
  offset: number;
  limit: number;
};

const getProducts = async (): Promise<
  [{ id: string; url: string; width: number; height: number }]
> => {
  const response = await axiosInstance.get("/search?limit=10");
  return response?.data;
};

const getPageData = async ({ offset, limit }: PageDataType) => {
  console.log("offset, limit", offset, limit);
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (offset === 0) {
    return paymentData.slice(0, 5);
  }
  if (offset === 5) {
    return paymentData.slice(5, 10);
  }
  if (offset === 10) {
    return paymentData.slice(10, 15);
  }
  if (offset === 15) {
    return paymentData.slice(15, 20);
  }
};

export { getProducts, getPageData };
