import { Image, TouchableOpacity, SectionList, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Plus } from "phosphor-react-native";
import { useTheme } from "styled-components";
import { StatisticsCard } from "@components/StatisticsCard";
import { TextValue } from "@components/TextValue";
import { Button } from "@components/Button";
import { MealCard } from "@components/MealCard";
import theme from "@theme/index";

import logoImg from "@assets/logo.png";
import avatar from "@assets/avatar.jpg";

import * as S from "./styles";

const DATA = [
  {
    date: "12/06/2023",
    data: [
      {
        hour: "10:00",
        name: "Pizza",
        description: "Pizza de Calabresa",
        inDiet: "outDiet",
      },
      {
        hour: "11:00",
        name: "Couve",
        description: "Pizza de Calabresa",
        inDiet: "inDiet",
      },
    ],
  },
  // {
  //   date: "11/06/2023",
  //   data: [
  //     {
  //       hour: "10:00",
  //       name: "Pizza",
  //       description: "Pizza de Calabresa",
  //       inDiet: "outDiet",
  //     },
  //     {
  //       hour: "11:00",
  //       name: "Danone",
  //       description: "Pizza de Calabresa",
  //       inDiet: "inDiet",
  //     },
  //   ],
  // },
  // {
  //   date: "12/06/2023",
  //   data: [
  //     {
  //       hour: "10:00",
  //       name: "Pizza",
  //       description: "Pizza de Calabresa",
  //       inDiet: "outDiet",
  //     },
  //     {
  //       hour: "11:00",
  //       name: "Pizza",
  //       description: "Pizza de Calabresa",
  //       inDiet: "outDiet",
  //     },
  //   ],
  // },
  // {
  //   date: "12/06/2023",
  //   data: [
  //     {
  //       hour: "10:00",
  //       name: "Pizza",
  //       description: "Pizza de Calabresa",
  //       inDiet: "outDiet",
  //     },
  //     {
  //       hour: "11:00",
  //       name: "Pizza",
  //       description: "Pizza de Calabresa",
  //       inDiet: "outDiet",
  //     },
  //     {
  //       hour: "13:00",
  //       name: "Chocolate",
  //       description: "Pizza de Calabresa",
  //       inDiet: "outDiet",
  //     },
  //   ],
  // },
];

export function Home() {
  const { FONT_SIZE } = useTheme();

  const navigation = useNavigation();

  function handleOpenMeal() {
    navigation.navigate("statistics");
  }

  return (
    <S.Container>
      <S.Header>
        <Image source={logoImg} />
        <S.Avatar source={avatar} />
      </S.Header>
      <TouchableOpacity onPress={handleOpenMeal}>
        <StatisticsCard showOpenButton height={102} variant="inDiet">
          <TextValue
            title="99%"
            subtitle="das refeições dentro da dieta"
            fontSize={FONT_SIZE.XL}
          />
        </StatisticsCard>
      </TouchableOpacity>
      <S.NewMealWrapper>
        <S.MealTitle>Refeições</S.MealTitle>
        <Button
          title="Nova Refeição"
          icon={<Plus color={theme.COLORS.WHITE} />}
        />
      </S.NewMealWrapper>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item.description + index}
        renderSectionHeader={({ section: { date } }) => (
          <View>
            <S.MealListTitle>{date}</S.MealListTitle>
          </View>
        )}
        renderItem={({ item }) => (
          <MealCard hour={item.hour} name={item.name} variant={item.inDiet} />
        )}
        fadingEdgeLength={200}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  );
}
