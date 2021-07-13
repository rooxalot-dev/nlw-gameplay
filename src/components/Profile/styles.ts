import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: 'center'
  },
  userPhotoContainer: {},
  user: {
    flexDirection: "row",
    alignItems: 'center'
  },
  greeting: {
    fontFamily: theme.fonts.title500,
    fontSize: 24,
    color: theme.colors.heading,
  },
  username: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.heading,
  },
  message: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.heading,
    marginTop: 2
  }
});
