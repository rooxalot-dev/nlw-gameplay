import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 100,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.secondary30,
    backgroundColor: theme.colors.secondary40,
    fontSize: 14,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text400,
    padding: 16,
    textAlignVertical: 'top'
  }
});
