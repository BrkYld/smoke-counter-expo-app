import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import {
    View,
    Image,
} from 'react-native';
import { GlobalStyle } from '../../constants/GlobalStyle';

interface Props {
    show: boolean
}

export const Loader = ({ show }: Props) => (
    <>
        <Modal
            isVisible={show}
            style={{ justifyContent: 'center' }}
            backdropOpacity={0}
            animationIn="fadeIn"
            animationOut="fadeOut"
        >
            <View
                style={{
                    justifyContent: 'center',
                    alignSelf: 'center',
                    alignItems: 'center',

                    backgroundColor: 'transparent',
                }}
            >

                <Image
                    source={require('../../../assets/loader.gif')}

                    style={{ width: GlobalStyle.width * 0.3, height: GlobalStyle.height * 0.1 }}
                />
            </View>
        </Modal>

    </>
);

Loader.propTypes = {
    show: PropTypes.bool,
};

Loader.defaultProps = {
    show: false,
};
