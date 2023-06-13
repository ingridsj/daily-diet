import styled, { css } from "styled-components/native";

type Props = {
  size: number;
  color: string;
};

export const Container = styled.View<Props>`
  border-radius: 50px;
  ${({ size, color }) => css`
    height: ${size}px;
    width: ${size}px;
    background-color: ${color};
  `};
`;
