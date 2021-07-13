import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: getStatusBarHeight() + 26,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});
