import * as S from "./styles";

type Props = {
  children: JSX.Element;
  showOpenButton?: boolean;
  height: number;
  variant: S.Variant;
};

export function StatisticsCard({
  children,
  showOpenButton = false,
  height,
  variant
}: Props) {
  return (
    <S.Container height={height} variant={variant}>
      {showOpenButton && (
          <S.OpenIcon variant={variant}/>
      )}
      {children}
    </S.Container>
  );
}
