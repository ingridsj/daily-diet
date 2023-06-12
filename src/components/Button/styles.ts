import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  min-height: 50px;
  max-height: 50px;
  border-radius: 6px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;

  ${({ theme, type }) => css`
    background-color: ${type === "PRIMARY"
      ? theme.COLORS.GRAY_200
      : "transparent"};
    border: 1px solid
      ${type === "PRIMARY" ? "transparent" : theme.COLORS.GRAY_100};
  `}
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    color: ${type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;
