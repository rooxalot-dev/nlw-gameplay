import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './styles';
import DiscordPng from '../../assets/discord-icon.png';

const { DISCORD_CDN_IMAGE } = process.env;

type GuildIconProps = {
  showDefaultImage?: boolean;
  guildId: string;
  iconId: string;
};

export function GuildIcon({ guildId, iconId, showDefaultImage }: GuildIconProps) {
  const imageUrl = `${DISCORD_CDN_IMAGE}/icons/${guildId}/${iconId}.png`

  return (
    <View style={styles.container}>
      {
        iconId && !showDefaultImage
          ? <Image style={styles.image} source={{ uri: imageUrl }} />
          : <Image style={styles.image} source={DiscordPng} />
      }

    </View>
  );
}
