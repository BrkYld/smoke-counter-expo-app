import { StyleSheet } from 'react-native';
import { GlobalStyle } from '../../constants/GlobalStyle';

export const Style = StyleSheet.create({
  brace: { flex: 0.5,
    marginTop: GlobalStyle.height * 0.0123,
    flexDirection: 'row',
    justifyContent: 'flex-end' },
  tabBar: { flex: 1, marginTop: 5 },
  tabButton: { display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center' },
});
