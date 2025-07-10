type ProductType = {
  id: string;
  url: string;
};

const Product = ({ id, url }: ProductType) => {
  return (
    <div>
      <div>This is my ID: {id}</div>
      <img src={url} width={200} />
    </div>
  );
};

export default Product;
