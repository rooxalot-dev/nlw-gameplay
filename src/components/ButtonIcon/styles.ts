import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    height: 56,
    borderRadius: 8,
    backgroundColor: theme.colors.primary,

  },
  icon: {
    color: theme.colors.heading,
  }
});
