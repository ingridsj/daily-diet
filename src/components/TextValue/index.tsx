import { View } from "react-native";

import theme from "@theme/index";
import * as S from "./styles";

type Props = {
  title: string;
  subtitle?: string;
  fontSize?: number;
  titleColor?: string;
  subtitleColor?: string;
};

export function TextValue({
  title,
  subtitle,
  fontSize = theme.FONT_SIZE.LG,
  titleColor = theme.COLORS.GRAY_100,
  subtitleColor = theme.COLORS.GRAY_200,
}: Props) {
  return (
    <View>
      <S.Title fontSize={fontSize} titleColor={titleColor}>
        {title}
      </S.Title>
      {subtitle && (
        <S.Subtitle subtitleColor={subtitleColor}>{subtitle}</S.Subtitle>
      )}
    </View>
  );
}
