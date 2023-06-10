import styled from "styled-components/native";

type TitleProps = {
  fontSize: number;
  titleColor: string;
};

type SubtitleProps = {
  subtitleColor: string;
};

export const Title = styled.Text<TitleProps>`
  text-align: center;
  font-size: ${({ fontSize }) => fontSize}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ titleColor }) => titleColor};
`;

export const Subtitle = styled.Text<SubtitleProps>`
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.XSM}px;
  color: ${({ subtitleColor }) => subtitleColor};
`;
