import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 116,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.secondary50,
    borderRadius: 10,
  },
  content: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 22,

  },
  check: {
    position: 'absolute',
    top: 7,
    right: 7,
    width: 8,
    height: 8,
    backgroundColor: theme.colors.secondary100,
    borderColor: theme.colors.secondary50,
    borderWidth: StyleSheet.hairlineWidth,
  },
  checked: {
    position: 'absolute',
    top: 7,
    right: 7,
    width: 8,
    height: 8,
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
  },
  icon: {

  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    marginTop: 18
  }
});
