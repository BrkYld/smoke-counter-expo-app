/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
import React, { useState, useContext, useEffect } from 'react';
import { SafeAreaView, Switch, Text, TextStyle, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { showMessage } from 'react-native-flash-message';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GlobalStyle } from '../../constants/GlobalStyle';
import { Header } from '../../components/Header';
import { ButtonLg, ButtonMd, Flex, InputTextField } from '../../components';
import { Service } from '../../client';
import { Style } from './Style';
import { LoaderContext } from '../../contexts';

type IconName = string | any

export const Register = ({ navigation }: any) => {
    const { showLoader, hideLoader } = useContext(LoaderContext);
    const [user, setUser] = useState<UserInfo>({ userName: '', password: '' });
    const [iconName, setIconName] = useState<IconName>('eye');
    const [disabled, setDisabled] = useState<boolean>(true);
    const [rememberMe, setRememberMe] = useState<boolean>(false);
    const toggleSwitch = () => setRememberMe(!rememberMe);
    const onIconPress = () => {
        if (iconName === 'eye') {
            setIconName('eye-off');
            setDisabled(false);
        } else {
            setDisabled(true);
            setIconName('eye');
        }
    };

    const register = () => {
        showLoader();
        Service.Auth.Register(user).then(async ({ data, error, message }) => {
            hideLoader();
            if (error === false) {
                navigation.pop();
            } else {
                showMessage({
                    message :'Eksik ya da hatalı bilgi girdiniz.',
                    type: 'danger',
                });
            }
        });
    };

    return (
        <>
            <SafeAreaView style={{ flex: 0, backgroundColor: GlobalStyle.color.primary }} />
            <SafeAreaView style={Style.container}>
                <Header style={{ flex: 0.3 }} title={'Kayıt olmak için\nbilgilerinizi giriniz.'} />
                <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={Style.contentContainer}>

                        <View style={[Style.flexGroup, { flex: 85, alignItems: 'flex-start', width: GlobalStyle.width * 0.893, justifyContent: 'flex-end' }]}>
                            <Text style={Style.titleText}>YENİ KAYIT</Text>
                        </View>
                        <View style={[Style.flexGroup, { flex: 200 }]}>
                            {/* placeHolder, style, type, title, onChangeText, secureTextEntry, isValid, editable, value, icon */}
                            <InputTextField value={user.userName} onChangeText={e => setUser({ ...user, userName: e })} style={Style.input} placeHolder="Kullanıcı Adınız" />
                            <InputTextField value={user.password} onChangeText={e => setUser({ ...user, password: e })} style={Style.input} placeHolder="Şifreniz" secureTextEntry={disabled} icon={<Ionicons onPress={onIconPress} name={iconName} style={GlobalStyle.inputIconStyle as TextStyle} size={GlobalStyle.inputIconSize.eye} color={GlobalStyle.color.grey} />} />
                        </View>
                        <View style={[Style.flexGroup, { flex: 300, justifyContent: 'center', }]}>
                            <View style={{ flex: 1, justifyContent: 'center', flexDirection:'row', alignItems:'center' }}>
                                <ButtonMd onPress={() => navigation.pop()} type="secondary" title="Geri" />
                                <Flex size={0.3}/>
                                <ButtonMd onPress={() => register()} type="success" title="Kayıt Ol" />
                            </View>
                            <View style={{ flex: 3, justifyContent: 'flex-start' }}>
                                <View style={{ flex: 1 }} />
                            </View>
                        </View>

                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </>
    );
};
