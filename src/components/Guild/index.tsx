import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import { styles } from "./styles";
import { GuildModel } from "../../models/MatchModel";
import { GuildIcon } from "../GuildIcon";


type GuildProps = TouchableOpacityProps & {
  guild: GuildModel
}

export function Guild({ guild, ...rest }: GuildProps) {
  return (
    <TouchableOpacity {...rest} activeOpacity={0.7}>
      <View style={styles.container}>

        <View style={styles.icon}>
          <GuildIcon guildId={guild.id} iconId={guild.icon} />
        </View>

        <View style={styles.content}>
          <View>
            <Text style={styles.guildTitle}>{guild.name}</Text>
            <Text style={styles.game}>{'Red Dead Redemption 2'}</Text>
          </View>

          <FontAwesome name="chevron-right" style={styles.rightIcon} size={8} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
