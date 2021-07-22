import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontFamily: theme.fonts.title700,
    fontSize: 18,
    color: theme.colors.heading
  },
  subLabel: {
    fontFamily: theme.fonts.text500,
    fontSize: 13,
    color: theme.colors.highlight
  },
  form: {
    marginTop: 32,
    marginHorizontal: 24,
  },
  serverSelect: {
    width: '100%',
    height: 68,
    paddingRight: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.secondary60,
    borderRadius: 8,
    overflow: 'hidden',
  },
  serverImage: {
    width: 64,
    height: 68,
    borderRadius: 8,

  },
  serverSelectBody: {},
  footer: {
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 30,
    marginBottom: getBottomSpace()
  },
  fieldGroup: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  descriptionContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  maxCharacters: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
    fontSize: 13,
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
