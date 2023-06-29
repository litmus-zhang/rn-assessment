import React from "react";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Container = styled.SafeAreaView`
  width: 100%;
  height: 50px;
  padding-horizontal: 10px;
  background: #000;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
`;
const Title = styled.Text`
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.25px;
  color: #fff;
`;
const IconButtonsRow = styled.View`
  flex-direction: row;
`;
const IconButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #e6e6e6;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
`;

interface HeaderProps {
  headerTitle: string;
}
const Header = (props: HeaderProps) => {
  return (
    <Container>
      <Title>{props.headerTitle}</Title>
      <IconButton activeOpacity={0.7} onPress={() => true}>
        <MaterialCommunityIcons name="magnify" size={28} color="#010101" />
      </IconButton>
    </Container>
  );
};
export default Header;
