import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 64,
    height: 68,
    marginRight: 10,
    backgroundColor: theme.colors.secondary40,
    borderRadius: 8
  },
  image: {
    width: 63,
    height: 67,
    borderRadius: 8
  }
});
