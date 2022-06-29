import React, { useRef } from 'react';
import { StyleSheet, View, TextInput, Text, Platform, KeyboardTypeOptions } from 'react-native';
import PropTypes from 'prop-types';
import { GlobalStyle } from '../../constants/GlobalStyle';

const styles = StyleSheet.create({
    input: {
        padding: Platform.OS === 'android' ? GlobalStyle.width * 0.026 : GlobalStyle.height * 0.021,
        justifyContent: 'center',
        color: GlobalStyle.color.grey,
    },
    inputTitleText: {
        fontSize: 11,
        marginBottom: 3,
        fontFamily: 'RobotoRegular',
    },
    inputContainer: {
        height: GlobalStyle.height * 0.064,
        backgroundColor: GlobalStyle.color.input,
        borderRadius: 6,
        fontWeight: '500',
    },
});


const types = {
    default: 'default',
    numberPad: 'number-pad',
    decimalPad: 'decimal-pad',
    numeric: 'numeric',
    email: 'email-address',
    phone: 'phone-pad',
    visiblePassword: 'visible-password'
};

export const InputTextField = ({ placeHolder, inputContainerStyle, titleStyle, multiline, inputStyle, style, type, numberOfLines, title, onChangeText, secureTextEntry, isValid, editable, value, icon, maxLength,  pointerEvents }: Props) => (
    <>
        <View style={style}>
            <View>
                <Text style={[styles.inputTitleText, titleStyle, { color: !isValid ? GlobalStyle.color.primary : GlobalStyle.color.text }]}>{title}</Text>
            </View>
            <View style={[inputContainerStyle, { borderColor: !isValid ? GlobalStyle.color.primary : undefined, borderWidth: !isValid ? 0.7 : undefined }]}>
                <TextInput numberOfLines={numberOfLines} multiline={multiline} pointerEvents={pointerEvents} maxLength={maxLength} value={value} editable={editable} secureTextEntry={secureTextEntry} keyboardType={types[type] as KeyboardTypeOptions} onChangeText={onChangeText} placeholder={placeHolder} placeholderTextColor={GlobalStyle.color.grey} style={[styles.input, inputStyle]} />
                {icon}
            </View>
        </View>
    </>
);


interface Props {
    title: String,
    placeHolder: string | undefined,
    type: keyof typeof types,
    value: string | undefined,
    style: Object,
    titleStyle?: Object,
    onChangeText: ((text: string) => void),
    secureTextEntry: boolean | undefined,
    editable: boolean | undefined,
    isValid: Boolean,
    icon: any,
    pointerEvents: "auto" | "none" | "box-none" | "box-only" | undefined,
    maxLength: number | undefined,
    inputContainerStyle: Object,
    inputStyle: Object,
    multiline: boolean | undefined,
    numberOfLines: number,
}

InputTextField.propTypes = {
    title: PropTypes.string,
    style: PropTypes.object,
    placeHolder: PropTypes.string,
    onChangeText: PropTypes.func,
    type: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    editable: PropTypes.bool,
    isValid: PropTypes.bool,
    value: PropTypes.string,
    icon: PropTypes.element,
    pointerEvents: PropTypes.string,
    maxLength: PropTypes.number,
    inputContainerStyle: PropTypes.object,
    inputStyle: PropTypes.object,
    multiline: PropTypes.bool,
    numberOfLines: PropTypes.number,
};

InputTextField.defaultProps = {
    placeHolder: '',
    style: {},
    onChangeText: () => null,
    type: 'default',
    title: '',
    secureTextEntry: false,
    editable: true,
    isValid: true,
    value: null,
    icon: null,
    mask: null,
    maxLength: null,
    pointerEvents: 'auto',
    inputContainerStyle: styles.inputContainer,
    inputStyle: {},
    multiline: false,
    numberOfLines: 2,
    maskType: '',
};
