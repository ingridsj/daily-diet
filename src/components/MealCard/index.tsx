import { TouchableOpacityProps } from "react-native";
import { CircleStatus } from "@components/CircleStatus";

import * as S from "./styles";
import { useTheme } from "styled-components";

type Props = TouchableOpacityProps & {
  hour: string;
  name: string;
  variant: string;
};

export function MealCard({ hour, name, variant, ...rest }: Props) {
  const { COLORS } = useTheme();

  const statusColor = variant === "inDiet" ? COLORS.GREEN_MID : COLORS.RED_MID;

  return (
    <S.Container {...rest}>
      <S.Wrapper>
        <S.Hour>{hour}</S.Hour>
        <S.Separator />
        <S.Name>{name}</S.Name>
      </S.Wrapper>
      <CircleStatus size={14} color={statusColor} />
    </S.Container>
  );
}
