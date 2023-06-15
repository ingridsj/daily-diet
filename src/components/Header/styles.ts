import styled, { css } from "styled-components/native";

type Props = {
  isStatisticsHeader: boolean;
  color: string;
};

export const Container = styled.View<Props>`
  padding: 24px;
  width: 100%;
  flex-direction: row;
  background-color: ${({ color }) => color};
  ${({ isStatisticsHeader }) =>
    !isStatisticsHeader &&
    css`
      align-items: center;
    `};

  ${({ isStatisticsHeader }) =>
    isStatisticsHeader &&
    css`
      height: 140px;
    `};
`;

export const Title = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-right: 12px;
`;
