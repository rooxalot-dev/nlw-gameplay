import React from "react";
import { Text, View } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

import { GuildIcon } from "../GuildIcon";
import { MatchModel } from "../../models/MatchModel";
import { categories } from "../../utils/categories";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type MatchProps = RectButtonProps & {
  match: MatchModel
}

export function Match({ match, ...rest }: MatchProps) {
  const category = categories.find((category) => category.id === match.category);
  const { id, icon } = match.guild;

  return (
    <RectButton {...rest}>
      <View style={styles.container}>

        <View style={styles.icon}>
          <GuildIcon guildId={id} iconId={icon} />
        </View>

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.guildTitle}>{match.guild.name}</Text>
            {category && <Text style={styles.categoryTitle}>{category.title}</Text>}
          </View>

          <Text style={styles.game}>{match.guild.owner ? 'Anfitrião' : 'Convidado'}</Text>

          <View style={styles.dateGuildCount}>
            <View style={styles.dateInfo}>
              <MaterialIcons name="view-agenda" style={styles.dateIcon} size={14} />
              <Text style={styles.dateText}>{match.date}</Text>
            </View>

            <View style={styles.guildCount}>
              <FontAwesome name="user" style={[styles.guildIcon, { color: match.guild.owner ? theme.colors.on : theme.colors.primary }]} size={14} />
              <Text style={[styles.guildText, { color: match.guild.owner ? theme.colors.on : theme.colors.primary }]}>
                {match.guild.owner ? 'Anfitrião' : 'Visitante'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  );
}
