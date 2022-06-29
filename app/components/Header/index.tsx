import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { GlobalStyle } from '../../constants/GlobalStyle';

const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyle.color.primary,
        flex: 85,
        justifyContent: 'space-around',
        alignSelf: 'flex-start',
        width: GlobalStyle.width,
    },
    text: {
        color: GlobalStyle.color.white,
        fontSize: 18,
        fontFamily: 'RobotoRegular',
    },
    item: {
        marginLeft: GlobalStyle.width * 0.04168,
        alignSelf: 'flex-start',
    },
});

interface Props {
    title: String,
    style: Object
}
export const Header = ({ title, style }: Props): JSX.Element => (

    <View style={[styles.container, style]}>
        <View style={styles.item}>
            <Text style={{
                color: GlobalStyle.color.white,
                fontSize: 25,
                fontFamily: 'RobotoBold',
                textAlign:'center'
            }}>SMOKE COUNTER</Text>
        </View>
        <View style={styles.item}>
            <Text style={styles.text}>{title}</Text>
        </View>
    </View>

);

Header.propTypes = {
    title: PropTypes.string.isRequired,
    style: PropTypes.object,
};
Header.defaultProps = {
    style: {},
};
