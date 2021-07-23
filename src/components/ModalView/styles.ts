import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay,
  },
  container: {
    flex: 1,
    marginTop: 80,
    backgroundColor: theme.colors.secondary80
  },
  bar: {
    width: 40,
    height: 2,
    backgroundColor: theme.colors.secondary30,
    alignSelf: 'center',
    marginTop: 14,
    marginBottom: 40,
  }
});
