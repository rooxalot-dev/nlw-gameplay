import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  label: {
    fontFamily: theme.fonts.title700,
    fontSize: 18,
    color: theme.colors.heading
  },
  field: {
    marginTop: 28
  },
  fieldRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12
  },
  divider: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.heading,
    fontSize: 20,
    marginHorizontal: 2
  }
});
