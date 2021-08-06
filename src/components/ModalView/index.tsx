import React, { ReactNode } from "react";
import { ModalProps, TouchableWithoutFeedback } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Modal, View } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";


type ModalViewProps = ModalProps & {
  children: ReactNode;
  showBar?: boolean;
  size?: 'small' | 'big';
  onCloseModal: () => void;
};

export function ModalView({ children, showBar = true, size = 'big', onCloseModal, ...rest }: ModalViewProps) {
  const { secondary70, secondary90 } = theme.colors;

  return (
    <Modal animationType="fade" {...rest} transparent statusBarTranslucent>
      <TouchableWithoutFeedback onPress={onCloseModal}>
        <View style={styles.overlay}>
          <LinearGradient
            style={[
              styles.container,
              size === 'small' ? { marginTop: '150%' } : {}
            ]}
            colors={[secondary70, secondary90]}>
            {showBar && <View style={styles.bar} />}
            {children}
          </LinearGradient>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
