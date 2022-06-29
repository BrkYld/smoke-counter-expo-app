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
import { ButtonLg, InputTextField } from '../../components';
import { Service } from '../../client';
import { Style } from './Style';
import { LoaderContext } from '../../contexts';

type IconName = string | any

export const Login = ({ navigation }: any) => {
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

    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            console.log('USER', user)
            if (typeof user === 'string') {
                navigation.replace('TabScreen');
            }
        })
    }, []);

    const login = () => {
        showLoader();
        Service.Auth.Login(user).then(async ({ data, error, message }) => {
            hideLoader();
            if (error === false) {
                await AsyncStorage.setItem('user', data);
                navigation.replace('TabScreen');
            } else {
                showMessage({
                    message: 'User doesnt exists',
                    type: 'danger',
                });
            }
        });
    };

    return (
        <>
            <SafeAreaView style={{ flex: 0, backgroundColor: GlobalStyle.color.primary }} />
            <SafeAreaView style={Style.container}>
                <Header style={{ flex: 0.3 }} title={'Giriş için\nbilgilerinizi giriniz.'} />
                <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={Style.contentContainer}>
                        <View style={[Style.flexGroup, { flex: 85, alignItems: 'flex-start', width: GlobalStyle.width * 0.893, justifyContent: 'flex-end' }]}>
                            <Text style={Style.titleText}>ÜYE GİRİŞİ</Text>
                        </View>
                        <View style={[Style.flexGroup, { flex: 200 }]}>
                            <InputTextField value={user.userName} onChangeText={e => setUser({ ...user, userName: e })} style={Style.input} placeHolder="Kullanıcı Adınız" />
                            <InputTextField value={user.password} onChangeText={e => setUser({ ...user, password: e })} style={Style.input} placeHolder="Şifreniz" secureTextEntry={disabled} icon={<Ionicons onPress={onIconPress} name={iconName} style={GlobalStyle.inputIconStyle as TextStyle} size={GlobalStyle.inputIconSize.eye} color={GlobalStyle.color.grey} />} />
                            <View style={{ width: GlobalStyle.width * 0.893, flex: 1, alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                    <Switch
                                        trackColor={{ false: GlobalStyle.color.grey, true: GlobalStyle.color.secondary }}
                                        thumbColor={GlobalStyle.color.input}
                                        ios_backgroundColor={GlobalStyle.color.grey}
                                        onValueChange={toggleSwitch}
                                        value={rememberMe}
                                    />
                                    <Text style={{ fontSize: 10, color: GlobalStyle.color.grey }}> Beni Hatırla</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text style={{ fontSize: 10, color: GlobalStyle.color.grey }} onPress={() => navigation.navigate('ForgotPassword')}>Şifremi Unuttum</Text>
                                </View>
                            </View>

                        </View>
                        <View style={[Style.flexGroup, { flex: 300, justifyContent: 'center' }]}>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <ButtonLg onPress={() => login()} type="success" title="Giriş Yap" />
                            </View>
                            <View style={{ flex: 3, justifyContent: 'flex-start' }}>
                                <View style={{ flex: 1 }} />
                                <View style={{ flex: 7, alignItems: 'flex-start' }}>
                                    <Text style={{ color: GlobalStyle.color.grey, fontFamily: 'RobotoRegular', fontSize: 14 }}>
                                        Hesabınız yok mu?
                                        <Text
                                            onPress={() => navigation.push('RegisterScreen')}
                                            style={Style.link}
                                        >
                                            Hesap Aç

                                        </Text>
                                    </Text>
                                </View>
                            </View>
                        </View>

                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </>
    );
};
