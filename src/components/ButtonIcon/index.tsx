import React from "react";
import { View, Text, Image, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from './styles';

type ButtonIconProps = TouchableOpacityProps & {
  title: string,
  icon?: any
};

export function ButtonIcon({ title, icon, ...rest }: ButtonIconProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      {icon &&
        <View style={styles.iconWrapper}>
          <Image source={icon} />
        </View>
      }

      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
