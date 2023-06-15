import * as S from "./styles";

type Props = {
  children: JSX.Element;
};

export function ContentWrapper({ children }: Props) {
  return <S.Container>{children}</S.Container>;
}
