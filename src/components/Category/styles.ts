import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginStart: 8,
  },
  content: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.secondary30
  },
  check: {
    width: 10,
    height: 10,
    backgroundColor: theme.colors.secondary100,
    borderColor: theme.colors.secondary50,
    borderWidth: StyleSheet.hairlineWidth,
    alignSelf: "flex-end",
    marginRight: 8
  },
  checked: {
    width: 10,
    height: 10,
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    alignSelf: "flex-end",
    marginRight: 8
  },
  icon: {
    marginTop: -10
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading
  }
});
