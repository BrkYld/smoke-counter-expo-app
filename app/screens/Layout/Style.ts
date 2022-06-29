import { StyleSheet } from 'react-native';
import { GlobalStyle } from '../../constants/GlobalStyle';

export const Style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  containerRow: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle:{ textAlign: 'center', fontFamily: 'RobotoBold', fontSize: 18, color: GlobalStyle.color.layoutTitle },
  textInput: {
    borderBottomWidth: 1,
    borderColor: '#a5a5a5',
    borderRadius: 4,
    alignSelf: 'stretch',
    paddingVertical: 5,
    paddingHorizontal: 1,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#a11a1a',
    borderWidth: 1,
  },
  headerBlack: {
    backgroundColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  flexEndRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignContent: 'flex-end',
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(242, 242, 242, 0.8)',
    zIndex: 99,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});
