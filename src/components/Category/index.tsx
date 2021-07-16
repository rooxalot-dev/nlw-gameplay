import React from "react";
import { Text, View } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

import { theme } from "../../global/styles/theme";
import { CategoryModel } from "../../models/CategoryModel";
import { styles } from "./styles";

type CategoryProps = RectButtonProps & {
  category: CategoryModel,
  checked: boolean;
}

export function Category({ category, checked, ...rest }: CategoryProps) {
  const { title, icon: Icon } = category;
  const { secondary50, secondary70 } = theme.colors;

  return (
    <RectButton {...rest}>
      <LinearGradient style={styles.container} colors={[secondary70, secondary50]}>
        <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
          <View style={!checked ? styles.check : styles.checked} />

          <Icon style={styles.icon} width={48} height={48} />

          <Text style={styles.title}>{title}</Text>
        </View>
      </LinearGradient>
    </RectButton>
  );
}
