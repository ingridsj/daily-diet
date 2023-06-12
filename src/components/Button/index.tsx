import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type Props = TouchableOpacityProps & {
  type?: S.ButtonTypeStyleProps;
  title: string;
  icon?: JSX.Element;
};

export function Button({ type = "PRIMARY", title, icon, ...rest }: Props) {
  return (
    <S.Container {...rest} type={type}>
      {icon}
      <S.Title type={type}>{title}</S.Title>
    </S.Container>
  );
}
