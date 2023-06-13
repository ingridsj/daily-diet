import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex: 1;
  min-height: 49px;
  max-height: 49px;
  margin-bottom: 8px;
  padding: 14px 16px 14px 12px;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;

  height: 21px;
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXSM}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Separator = styled.View`
  height: 14px;
  width: 1px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  margin: 0 12px;
`;

export const Name = styled.Text`
  line-height: 21px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;
