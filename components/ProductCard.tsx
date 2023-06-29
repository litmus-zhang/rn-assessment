import React from "react";
import {
  ProductCardWwrapper,
  Image,
  ActionButton,
  DetailsButton,
} from "../styles";
import { Text, Button } from "react-native";

interface ProductCardProps {
  title: string;
  price: string;
  sourceImage: string;
}

export default function ProductCard(props?: ProductCardProps) {
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
