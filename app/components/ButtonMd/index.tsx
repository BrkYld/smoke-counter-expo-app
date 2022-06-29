import React from 'react';
import { TouchableOpacity, StyleSheet, Text, GestureResponderEvent } from 'react-native';
import PropTypes from 'prop-types';
import { GlobalStyle } from '../../constants/GlobalStyle';

const types = {
  success: GlobalStyle.color.secondary,
  danger: GlobalStyle.color.primary,
  secondary: GlobalStyle.color.grey,
  empty: GlobalStyle.color.transparent,
};
const style = StyleSheet.create({
  container: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: GlobalStyle.width * 0.4,
    height: GlobalStyle.height * 0.07,
  },
});

interface Props {
    title: String,
    type: keyof typeof types,
    onPress: (event: GestureResponderEvent) => void,
    styles: Object,
    disabled: boolean | null | undefined,
    icon?: JSX.Element,
    titleStyle: Object,
}

export const ButtonMd = ({ title, onPress, type, styles, titleStyle, disabled } : Props) => (

  <TouchableOpacity disabled={disabled} onPress={onPress} style={[{ backgroundColor: types[type] }, style.container, styles]}>
    <Text style={[{
      color: GlobalStyle.color.white,
      fontSize: 16,
      fontFamily: 'RobotoMedium',
    }, titleStyle]}
    >
      {title}
    </Text>
  </TouchableOpacity>

);

ButtonMd.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  type: PropTypes.string,
  styles: PropTypes.object,
  titleStyle: PropTypes.object,
  disabled: PropTypes.bool,
};
ButtonMd.defaultProps = {
  title: '',
  onPress: () => { },
  type: 'success',
  styles: {},
  titleStyle: {},
  disabled: false,
};
