import React, { useState } from "react";
import {
  ProductCardWwrapper,
  Image,
  ActionButton,
  DetailsButton,
} from "../styles";
import { View, Text, TextBase, Button } from "react-native";

export default function ProductCard() {
  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
    const response = await fetch(
      "https://shop.comeriver.com/widgets/Application_Article_ShowAll?pc_widget_output_method=JSON"
    );
    const data = await response.json();
    setProduct(data);
    console.log(product);
  };
  return (
    <ProductCardWwrapper>
      <Image
        source={{
          uri: "https://th.bing.com/th/id/OIP.OchaByfXdWWB1NFgsyUubAHaGm?w=189&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        }}
      />
      <Text>Product Description</Text>
      <Text>Price</Text>
      <ActionButton>
        <DetailsButton title="Details" />
        <Button title="Add to carts" />
      </ActionButton>
    </ProductCardWwrapper>
  );
}
