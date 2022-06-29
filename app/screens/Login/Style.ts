import { StyleSheet } from 'react-native';
import { GlobalStyle } from '../../constants/GlobalStyle';

export const Style = StyleSheet.create({
  link: { fontSize: 14, color: GlobalStyle.color.secondary, fontFamily: 'RobotoBold' },
  container: {
    backgroundColor: GlobalStyle.color.white,
    flex: 1,
    justifyContent: 'space-around',
    alignSelf: 'flex-start',
    width: GlobalStyle.width,
  },
  titleText: { fontSize: 18, fontFamily: 'RobotoBold', color: GlobalStyle.color.text },
  contentContainer: {
    flex: 321,
    width: GlobalStyle.width,
    backgroundColor: GlobalStyle.color.white,
    alignItems: 'center',
  },
  flexGroup: {
    justifyContent: 'center',
    alignItems: 'center',
    width: GlobalStyle.width,
    backgroundColor: GlobalStyle.color.white,
  },
  input: {
    width: GlobalStyle.width * 0.893,
    flex: 2,
  },
});
