import theme from "@theme/index";
import { ArrowUpRight } from "phosphor-react-native";
import styled from "styled-components/native";

export type Variant = "inDiet" | "outDiet";

type ContainerProps = {
  height: number;
  variant: Variant;
};

type IconProps = {
  variant: Variant;
};

function getVariantColor(variant: Variant) {
  if (variant === "inDiet") {
    return theme.COLORS.GREEN_LIGHT;
  }

  if (variant === "outDiet") {
    return theme.COLORS.RED_LIGHT;
  }

  return theme.COLORS.GRAY_600;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: ${({ height }) => height}px;
  background-color: ${({ variant }) => getVariantColor(variant)};
  border-radius: 8px;
  padding: 16px;
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
