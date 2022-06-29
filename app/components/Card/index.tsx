import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { GlobalStyle } from '../../constants/GlobalStyle';

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: GlobalStyle.width * 0.89,
    height: GlobalStyle.height * 0.41,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: GlobalStyle.color.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1.5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 7.84,
    elevation: 3.5,
  },
});

interface Props {
    children: JSX.Element,
    styles: Object
}
export const Card = ({ children, styles } : Props) : JSX.Element => (
  <View style={[style.container, styles]}>
    {children}
  </View>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.object,
};
Card.defaultProps = {
  styles: {},
};
