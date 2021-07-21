import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: '100%',
    height: 234,
    marginBottom: 30
  },
  bannerContent: {
    flex: 1,
    paddingHorizontal: 24,
    marginBottom: 30,
    justifyContent: 'flex-end',
  },
  title: {
    marginBottom: 10,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 28,
  },
  subtitle: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading,
    fontSize: 13
  },
  footer: {
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 30,
    marginBottom: getBottomSpace()
  }
});
