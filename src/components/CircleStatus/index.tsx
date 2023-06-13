import * as S from "./styles";

type Props = {
  size?: number;
  color: string;
};

export function CircleStatus({ size = 14, color }: Props) {
  return <S.Container size={size} color={color} />;
}
