import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

interface Props {
    size: number
}

export const Flex = ({ size }: Props) : JSX.Element => (
  <View style={{ flex: size }} />
);

Flex.propTypes = {
  size: PropTypes.number,
};

Flex.defaultProps = {
  size: 1,
};
