import React, { useMemo, useState } from "react";
import { ScrollView, View, Text } from "react-native";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import { Box } from "./styles";

const products = new Array(10).fill(null).map((v, i) => i + 1);
export default function App() {
  const [product, setProduct] = useState([]);

  const fetchProduct = useMemo(() => {
    fetch(
      "https://shop.comeriver.com/widgets/Application_Article_ShowAll?pc_widget_output_method=JSON"
    )
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [product]);

  console.log(fetchProduct, product);

  return (
    <View>
      <Header headerTitle="ComeRiver" />
      <ScrollView>
        <Box>
          {products.map((product) => (
            <ProductCard key={product} />
          ))}
        </Box>
      </ScrollView>
    </View>
  );
}
