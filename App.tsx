import React from "react";
import { ScrollView, View } from "react-native";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import { Box } from "./styles";
// const Samples = {

const products = new Array(10).fill(null).map((v, i) => i + 1);
export default function App() {
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
