import React, { useState, useCallback } from "react";
import { ImageBackground, View, Text, FlatList, Alert } from "react-native";
import { useRoute } from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";

import { Header } from "../../components/Header";
import { ListHeader } from "../../components/ListHeader";
import { ItemSeparator } from "../../components/ItemSeparator";
import { Member } from "../../components/Member";
import { ButtonTextIcon } from "../../components/ButtonTextIcon";

import { MatchModel } from "../../models/MatchModel";
import { MemberModel } from "../../models/MemberModel";

import BannerPng from '../../assets/banner.png';
import DiscordImg from '../../assets/discord.png';

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { useEffect } from "react";
import { api } from "../../services/api";
import Loading from "../../components/Loading";

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberModel[];
  presence_count: number;
};

export function MatchDetails() {
  const [matchDetail, setMatchDetail] = useState<MatchModel | null>(null);
  const [matchGuildWidget, setMatchGuildWidget] = useState<GuildWidget>({} as GuildWidget);
  const [loadingGuildWidget, setLoadingGuildWidget] = useState<boolean>(false);

  const { params: match } = useRoute();

  useEffect(() => {
    if (match) {
      const matchObj = match as MatchModel;
      setMatchDetail(matchObj);
      fetchGuildInfo(matchObj);
    }
  }, []);

  const fetchGuildInfo = async (match: MatchModel) => {
    try {
      setLoadingGuildWidget(true);

      const { data } = await api.get<GuildWidget>(`/guilds/${match?.guild.id}/widget.json`);
      setMatchGuildWidget(data);
    } catch (error) {
      Alert.alert('Verifique as configurações do servidor. Será que as configs de Widget foram ativadas?');
    } finally {
      setLoadingGuildWidget(false);
    }
  };

  // const members: MemberModel[] = [
  //   {
  //     id: '1',
  //     username: 'Rodrigo Martins',
  //     avatar_url: 'https://github.com/rooxalot-dev.png',
  //     status: 'online'
  //   },
  //   {
  //     id: '2',
  //     username: 'Matheus',
  //     avatar_url: 'https://github.com/rooxalot-dev.png',
  //     status: 'offline'
  //   },
  //   {
  //     id: '3',
  //     username: 'Rodrigo',
  //     avatar_url: 'https://github.com/rooxalot-dev.png',
  //     status: 'online'
  //   },
  // ];

  return (
    <View style={styles.container}>
      <Header title="Detalhes" action={
        <BorderlessButton>
          <Fontisto name="share" size={20} color={theme.colors.primary} />
        </BorderlessButton>
      } />

      <ImageBackground source={BannerPng} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>{matchDetail?.guild.name}</Text>
          <Text style={styles.subtitle}>{matchDetail?.description}</Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle={`Total ${matchGuildWidget?.members?.length ?? 0}`} />

      {
        loadingGuildWidget
          ? <Loading />
          :
          <FlatList
            data={matchGuildWidget.members}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Member data={item} />
            )}
            ItemSeparatorComponent={() => (<ItemSeparator />)}
            style={{ marginTop: 27 }}
          />
      }

      <View style={styles.footer}>
        <ButtonTextIcon title="Entrar na partida" icon={DiscordImg} />
      </View>

    </View>
  );
}
