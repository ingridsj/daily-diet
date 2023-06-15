import { getColor } from "@utils/getColor";
import { ArrowUpRight } from "phosphor-react-native";
import styled from "styled-components/native";

export type Variant = "inDiet" | "outDiet";

type ContainerProps = {
  height: number;
  variant?: Variant;
};

type IconProps = {
  variant: Variant;
};

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: ${({ height }) => height}px;
  background-color: ${({ variant, theme }) =>
    variant ? getColor(variant).background : theme.COLORS.GRAY_600};
  border-radius: 8px;
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

export const OpenIcon = styled(ArrowUpRight).attrs<IconProps>(
  ({ theme, variant }) => ({
    size: 24,
    color:
      variant === "inDiet" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  })
)`
  position: absolute;
  right: 8px;
  top: 8px;
`;
