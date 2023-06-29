import styled from "styled-components/native";
export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const Box = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px 5px;
`;
export const BoxText = styled.Text`
  padding: 20px;
  text-align: center;
  display: flex;
`;
export const ActionButton = styled.View`
  display: flex;
  gap: 10px;
  flex-direction: row;
  align-item: center;
`;

export const DetailsButton = styled.Button`
  background: white;
  border: 1px solid blue;
  
`;
export const ProductCardWwrapper = styled.View`
  border: 1px solid #ccc;
  border-radius: 5px 0;
  padding: 10px;
  width: 92%;
  text-align: left;
  .product-name {
    font-size: 16px;
    font-weight: bold;
  }
  .product-price {
    font-size: 14px;
    font-weight: bold;
  }
  .add-to-cart {
    background-color: #000;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    margin-top: 10px;
    text-align: center;
  }
  ,
  .product-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;
