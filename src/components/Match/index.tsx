import React from "react";
import { Text, View } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

import { styles } from "./styles";
import { MatchModel } from "../../models/MatchModel";
import { categories } from "../../utils/categories";


type MatchProps = RectButtonProps & {
  match: MatchModel
}

export function Match({ match, ...rest }: MatchProps) {
  const category = categories.find((category) => category.id === match.category);
  const { icon: Icon } = match.guild;

  return (
    <RectButton {...rest}>
      <View style={styles.container}>

        <View style={styles.icon}>
          <Icon />
        </View>

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.guildTitle}>{match.guild.name}</Text>
            {category && <Text style={styles.categoryTitle}>{category.title}</Text>}
          </View>

          <Text style={styles.game}>{match.game}</Text>

          <View style={styles.dateGuildCount}>
            <View style={styles.dateInfo}>
              <MaterialIcons name="view-agenda" style={styles.dateIcon} size={14} />
              <Text style={styles.dateText}>{match.date}</Text>
            </View>

            <View style={styles.guildCount}>
              <FontAwesome name="user" style={styles.guildIcon} size={14} />
              <Text style={styles.guildText}>{2}</Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  );
}
