import { StatusBar, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "phosphor-react-native";
import { getColor } from "@utils/getColor";

import * as S from "./styles";

type Props = {
  children: JSX.Element;
  isStatisticsHeader?: boolean;
  variant: string;
};

export function Header({
  children,
  isStatisticsHeader = false,
  variant,
}: Props) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("home");
  }

  const { background, arrow } = getColor(variant);

  return (
    <S.Container isStatisticsHeader={isStatisticsHeader} color={background}>
      <StatusBar
        backgroundColor={background}
        barStyle="dark-content"
        translucent
      />
      <TouchableOpacity onPress={handleGoBack}>
        <ArrowLeft size={24} color={arrow} />
      </TouchableOpacity>
      <S.Title>{children}</S.Title>
    </S.Container>
  );
}
