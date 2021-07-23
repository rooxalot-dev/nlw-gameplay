import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 24,
    marginBottom: -12,
  },
  icon: {
    marginRight: 20
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  guildTitle: {
    fontFamily: theme.fonts.title700,
    fontSize: 18,
    color: theme.colors.heading,
    marginBottom: 6

  },
  game: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.highlight,
    marginBottom: 8
  },
  rightIcon: {
    color: theme.colors.heading,
    marginRight: 6
  },
  guildText: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
  }
});
