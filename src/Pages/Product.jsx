import { useContext } from "react";
import { shopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox";
import RelatedProduct from "../Components/RelatedProduct";

export default function Product(props) {
  const { allProducts } = useContext(shopContext);
  const { productId } = useParams();
  const product = allProducts.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct />
    </div>
  );
}
