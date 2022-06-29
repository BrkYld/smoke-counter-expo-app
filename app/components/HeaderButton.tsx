import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

const Style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 3,
  },
});


export const HeaderButton = ({ onPress, icon, title, type, color, disabled } : Props) => (
  <View>
    <TouchableOpacity
      disabled={disabled}
      style={{ padding: 7 }}
      onPress={() => onPress()}
    >
      <View style={[Style.container, { opacity: disabled ? 0.5 : 1 }]}>
        {
            <Icon tvParallaxProperties={{}} name={icon} color={color} type={type} size={27} />
        }
        {title && <Text style={{ color, fontSize: 18, marginLeft: 10 }}>{title}</Text>}
      </View>
    </TouchableOpacity>
  </View>
);

interface Props{
    onPress : Function,
    icon : string,
    title: String,
    type: string,
    color: string,
    disabled: boolean | null,
}

HeaderButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
};
HeaderButton.defaultProps = {
  title: null,
  type: 'material',
  color: '#FFF',
  disabled: false,
  svgIcon: false,
};
