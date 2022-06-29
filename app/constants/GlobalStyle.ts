import { Dimensions, Platform } from 'react-native';

export const GlobalStyle = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  color: {
    primary: '#E71858',
    primaryLight: '#FF97BD',
    secondary: '#1BC5BD',
    secondaryLight: '#C9F7F5',
    input: '#F6F6F6',
    grey: '#ADB5BD',
    text: '#202A31',
    white: '#FFFFFF',
    layoutTitle: '#FFFBFB',
    whiteBorder: '#CFFFF6',
    transparent: 'transparent',
    alertDanger: '#ffa800',
    background: '#f7f9fd',
    tabInactive: '#8F9BB3',
    cardTitle: '#7B7D8A',
    cardSubtitle: '#ABB6C8',
    zebraGrey: '#F6F6F7',
    inProcess: '#ffb848',
    braceGrey: '#DEE1E5',
    titleGray: '#CFD7E3',
  },
  inputIconStyle: {
    position: 'absolute',
    right: Dimensions.get('window').width * 0.01,
    top: Dimensions.get('window').height * 0.013,
    padding: Platform.OS === 'ios' ? Dimensions.get('window').height * 0.0065 : Dimensions.get('window').height * 0.0065,
  },
  inputIconSize: {
    date: 18.5,
    eye: 20,
    barcode: 25,
  },
};
