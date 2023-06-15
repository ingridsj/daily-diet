import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  flex: 1;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;
