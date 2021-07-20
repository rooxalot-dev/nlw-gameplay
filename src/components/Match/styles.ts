import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  icon: {
    marginRight: 20
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  guildTitle: {
    fontFamily: theme.fonts.title700,
    fontSize: 18,
    color: theme.colors.heading,

  },
  categoryTitle: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.highlight,
  },
  game: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.highlight,
    marginBottom: 8
  },
  dateGuildCount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  dateInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateIcon: {
    color: theme.colors.primary,
    marginRight: 12
  },
  dateText: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
    marginRight: 12
  },
  guildCount: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  guildIcon: {
    color: theme.colors.primary,
    marginRight: 6
  },
  guildText: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
  }
});
