import React, { ReactNode } from "react";
import { Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import { BorderlessButton } from "react-native-gesture-handler";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { useNavigation } from "@react-navigation/native";

type HeaderProps = {
  title: string,
  action?: ReactNode
};

export function Header({ title, action }: HeaderProps) {
  const { secondary100, secondary40, heading } = theme.colors;
  const { goBack } = useNavigation();

  return (
    <LinearGradient style={styles.container} colors={[secondary100, secondary40]}>
      <BorderlessButton onPress={() => goBack()}>
        <Feather name="arrow-left" size={24} color={heading} />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>

      {
        action &&
        <View style={styles.action}>
          {action}
        </View>
      }
    </LinearGradient>
  );
}
