import React from "react";
import { ImageBackground, View, Text, FlatList } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";

import { Header } from "../../components/Header";
import { ListHeader } from "../../components/ListHeader";
import { ItemSeparator } from "../../components/ItemSeparator";
import { Member } from "../../components/Member";
import { ButtonTextIcon } from "../../components/ButtonTextIcon";
import { MemberModel } from "../../models/MemberModel";
import BannerPng from '../../assets/banner.png';
import DiscordImg from '../../assets/discord.png';

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

export function MatchDetails() {
  const members: MemberModel[] = [
    {
      id: '1',
      username: 'Rodrigo Martins',
      avatar_url: 'https://github.com/rooxalot-dev.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Matheus',
      avatar_url: 'https://github.com/rooxalot-dev.png',
      status: 'offline'
    },
    {
      id: '3',
      username: 'Rodrigo',
      avatar_url: 'https://github.com/rooxalot-dev.png',
      status: 'online'
    },
  ];

  return (
    <View style={styles.container}>
      <Header title="Detalhes" action={
        <BorderlessButton>
          <Fontisto name="share" size={20} color={theme.colors.primary} />
        </BorderlessButton>
      } />

      <ImageBackground source={BannerPng} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>É hoje que vamos cehgar ao challenger sem perder uma partida da md10</Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 3" />

      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Member data={item} />
        )}
        ItemSeparatorComponent={() => (<ItemSeparator />)}
        style={{ marginTop: 27 }}
      />

      <View style={styles.footer}>
        <ButtonTextIcon title="Entrar na partida" icon={DiscordImg} />
      </View>

    </View>
  );
}
