import { Image } from "react-native";

import logoImg from "@assets/logo.png";
import avatar from "@assets/avatar.jpg";

import * as S from "./styles";

export function Home() {
  return (
    <S.Container>
      <S.Header>
        <Image source={logoImg} />
        <S.Avatar source={avatar} />
      </S.Header>
    </S.Container>
  );
}
