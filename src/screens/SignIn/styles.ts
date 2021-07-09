import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.color.background
  },
  illustration: {
    width: '100%',
    height: 360,
  },
  content: {
    marginTop: -40,
    marginBottom: 64
  },
  title: {
    marginBottom: 16,
    fontSize: 40,
    textAlign: 'center',
    color: theme.color.heading
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 25,
    color: theme.color.heading
  },
  signInButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 274,
    padding: 30,
    height: 56,
    borderRadius: 8,
    backgroundColor: theme.color.primary
  },
  signInText: {
    fontSize: 15,
    color: theme.color.heading
  }
});
