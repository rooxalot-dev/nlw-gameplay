import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  illustration: {
    width: '100%',
    height: 360,
    marginTop: -40
  },
  content: {
    marginTop: -40,
    marginBottom: 64
  },
  title: {
    marginBottom: 16,
    fontSize: 40,
    fontFamily: theme.fonts.title700,
    textAlign: 'center',
    lineHeight: 40,
    color: theme.colors.heading
  },
  subtitle: {
    fontSize: 15,
    fontFamily: theme.fonts.text400,
    textAlign: 'center',
    lineHeight: 25,
    color: theme.colors.heading
  },
  signInButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 274,
    padding: 30,
    height: 56,
    borderRadius: 8,
    backgroundColor: theme.colors.primary
  },
  signInText: {
    fontSize: 15,
    color: theme.colors.heading
  }
});
