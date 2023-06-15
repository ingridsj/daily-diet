import { useTheme } from "styled-components";
import { Header } from "@components/Header";
import { TextValue } from "@components/TextValue";
import { ContentWrapper } from "@components/ContentWrapper";
import { StatisticsCard } from "@components/StatisticsCard";
import { getColor } from "@utils/getColor";

import * as S from "./styles";

export function Statistics() {
  const { FONT_SIZE } = useTheme();

  const { background } = getColor("inDiet");

  return (
    <S.Container color={background}>
      <Header isStatisticsHeader variant="inDiet">
        <TextValue
          title="99%"
          subtitle="das refeições dentro da dieta"
          fontSize={FONT_SIZE.XL}
        />
      </Header>
      <ContentWrapper>
        <S.ContentBox>
          <TextValue title="Estatísticas gerais" fontSize={FONT_SIZE.XXSM} />
          <S.Separator />
          <StatisticsCard height={89}>
            <TextValue
              title="22"
              subtitle="melhor sequência de pratos dentro da dieta"
            />
          </StatisticsCard>
          <StatisticsCard height={89}>
            <TextValue title="109" subtitle="refeições registradas" />
          </StatisticsCard>
          <S.StatisticsFlex>
            <StatisticsCard height={107} variant="inDiet">
              <TextValue title="99" subtitle="refeições dentro da dieta" />
            </StatisticsCard>
            <StatisticsCard height={107} variant="outDiet">
              <TextValue title="10" subtitle={`refeições fora da \n dieta`} />
            </StatisticsCard>
          </S.StatisticsFlex>
        </S.ContentBox>
      </ContentWrapper>
    </S.Container>
  );
}
