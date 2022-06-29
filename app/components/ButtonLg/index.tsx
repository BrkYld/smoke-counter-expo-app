import React from 'react';
import { TouchableOpacity, StyleSheet, Text, GestureResponderEvent } from 'react-native';
import PropTypes from 'prop-types';
import { GlobalStyle } from '../../constants/GlobalStyle';
import { Flex } from '..';

const types = {
    success: GlobalStyle.color.secondary,
    danger: GlobalStyle.color.primary,
    secondary: GlobalStyle.color.grey,
    empty: GlobalStyle.color.transparent,
};

const style = StyleSheet.create({
    container: {
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: GlobalStyle.width * 0.893,
        height: GlobalStyle.height * 0.07,
    },
});

interface Props {
    title: String,
    type: keyof typeof types,
    onPress: (event: GestureResponderEvent) => void,
    styles: Object,
    disabled: boolean | null | undefined,
    icon: JSX.Element
}
export const ButtonLg = ({ title, onPress, type, styles, icon, disabled }: Props): JSX.Element => (

    <TouchableOpacity disabled={disabled} onPress={onPress} style={[{ backgroundColor: types[type] }, style.container, styles]}>
        <Text style={{
            color: GlobalStyle.color.white,
            fontSize: 16,
            fontFamily: 'RobotoMedium',
        }}
        >
            {title}
        </Text>
        {icon && (
            <>
                {title !== '' && (<Flex size={0.1} />)}
                {icon}
            </>
        )}
    </TouchableOpacity>

);

ButtonLg.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.element,
    onPress: PropTypes.func,
    type: PropTypes.string,
    styles: PropTypes.object,
    disabled: PropTypes.bool,
};
ButtonLg.defaultProps = {
    title: '',
    onPress: () => { },
    type: 'success',
    styles: {},
    icon: null,
    disabled: false,
};
