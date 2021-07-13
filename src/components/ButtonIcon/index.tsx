import React, { ReactNode } from "react";
import { Text } from "react-native";

import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { styles } from './styles';

type ButtonIconProps = RectButtonProps & {
  icon: ReactNode
};

export function ButtonIcon({ icon, ...rest }: ButtonIconProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <Text style={styles.icon}>
        {icon}
      </Text>
    </RectButton>
  );
}
