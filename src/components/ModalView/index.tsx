import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import { ModalProps } from "react-native";
import { Modal, View } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";


type ModalViewProps = ModalProps & {
  children: ReactNode;
};

export function ModalView({ children, ...rest }: ModalViewProps) {
  const { secondary70, secondary90 } = theme.colors;

  return (
    <Modal animationType="slide" {...rest} transparent>
      <View style={styles.overlay}>
        <LinearGradient style={styles.container} colors={[secondary70, secondary90]}>
          <View style={styles.bar} />
          {children}
        </LinearGradient>
      </View>
    </Modal>
  );
}
