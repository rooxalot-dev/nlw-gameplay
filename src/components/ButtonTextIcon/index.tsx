import React from "react";
import { View, Text, Image } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { styles } from './styles';

type ButtonIconProps = RectButtonProps & {
  title?: string,
  icon?: any
};

export function ButtonTextIcon({ title, icon, ...rest }: ButtonIconProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      {icon &&
        <View style={styles.iconWrapper}>
          <Image source={icon} />
        </View>
      }

      {!!title && <Text style={styles.buttonText}>{title}</Text>}
    </RectButton>
  );
}
