import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  color: string;
};

export const Container = styled(SafeAreaView)<Props>`
  background-color: ${({ color }) => color};
  flex: 1;
`;

export const ContentBox = styled.View`
  padding: 34px 24px;
  gap: 12px;
`;

export const Separator = styled.View`
  margin-top: 12px;
`;

export const StatisticsFlex = styled.View`
  width: 48.2%;
  flex-direction: row;
  gap: 12px;
`;
