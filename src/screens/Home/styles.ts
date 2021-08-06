import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: getStatusBarHeight() + 26,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40
  },
  content: {
    marginTop: 40,
    flex: 1
  },
  modalContainer: {
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutText: {
    fontFamily: theme.fonts.title500,
    fontSize: 30,
    color: theme.colors.heading,
    letterSpacing: 0,
    marginRight: 6
  },
  logoutLogoImage: {
    width: 100,
  },
  logoutButtonOptions: {
    marginTop: 24,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  logoutButtonText: {
    fontSize: 15,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text400
  },
  logoutButton: {
    width: 160,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoutNo: {
    borderRadius: 6,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.secondary30
  },
  logoutYes: {
    backgroundColor: theme.colors.primary,
    borderRadius: 6,
  },
});
