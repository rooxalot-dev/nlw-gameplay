import React, { ReactNode } from "react";
import { ModalProps, TouchableWithoutFeedback } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Modal, View } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";


type ModalViewProps = ModalProps & {
  children: ReactNode;
  onCloseModal: () => void;
};

export function ModalView({ children, onCloseModal, ...rest }: ModalViewProps) {
  const { secondary70, secondary90 } = theme.colors;

  return (
    <Modal animationType="slide" {...rest} transparent statusBarTranslucent>
      <TouchableWithoutFeedback onPress={onCloseModal}>
        <View style={styles.overlay}>
          <LinearGradient style={styles.container} colors={[secondary70, secondary90]}>
            <View style={styles.bar} />
            {children}
          </LinearGradient>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
