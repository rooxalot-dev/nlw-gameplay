import React from "react";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type AvatarProps = {
  imageUrl: string;
}

export function Avatar({ imageUrl }: AvatarProps) {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <LinearGradient
      colors={[secondary70, secondary50]}
      style={styles.container}>
      <Image style={styles.avatar} source={{ uri: imageUrl }} />
    </LinearGradient>
  )
}
