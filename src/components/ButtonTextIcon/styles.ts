import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

    height: 56,
    borderRadius: 8,
    backgroundColor: theme.colors.primary
  },
  iconWrapper: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: `rgba(0, 0, 0, 0.3)`
  },
  buttonText: {
    flex: 1,
    fontSize: 15,
    fontFamily: theme.fonts.text500,
    color: theme.colors.heading,
    textAlign: 'center'
  }
});
