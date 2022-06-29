import React, { useEffect, useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { LoaderContext } from '../../contexts';
import { Layout } from '../Layout';
import { GlobalStyle } from '../../constants/GlobalStyle';
import { Flex } from '../../components';
import * as Location from 'expo-location';
import { showMessage } from 'react-native-flash-message';
import { Service } from '../../client';
import { ReportContext } from '../../contexts/ReportContext';

export const Home = ({ navigation }: any) => {
    const { showLoader, hideLoader } = useContext(LoaderContext);
    const {dailyReport, setDailyReport} = useContext(ReportContext);


    useEffect(() => {
        getDailyReport();
    }, [])

    const getLocation = async (): Promise<Location.LocationObject | null> => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            showMessage({
                message: 'Permission to access location was denied',
                type: 'danger',
            });
            return null;
        }

        let location = await Location.getCurrentPositionAsync({});
        return location;
    }

    const saveSmoke = (): void => {
        showLoader();
        getLocation().then(location => {
            const smokeRequest: SmokeRequest = {
                x: location ? location.coords.latitude.toString() : '',
                y: location ? location.coords.longitude.toString() : ''
            }
            Service.User.Smoke(smokeRequest).then(response => {
                hideLoader();
                getDailyReport();
            })

        }).catch(() => hideLoader())
    }

    const getDailyReport = (): void => {
        showLoader();
        Service.User.GetDailyReport().then(({ error, data, message }) => {
            hideLoader();
            if (!error) {
                console.log(data);
                setDailyReport(data)
            }
        })
    }

    return (
        <Layout title= {dailyReport.count > 0 ? dailyReport.day : 'Ana Sayfa'} navigation={navigation} logoutButton scroll={false}>
            <View
                style={{
                    flex: 657,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: GlobalStyle.color.white,
                }}
            >
                <Flex size={5} />
                <View style={{ flex: 637, width: GlobalStyle.width * 346 / 375, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'column',
                            marginTop: 20,
                            width: GlobalStyle.width / 1.1,
                            height: GlobalStyle.width / 1.1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 10,
                            borderRadius: 200,
                            borderColor: GlobalStyle.color.zebraGrey,
                            backgroundColor: GlobalStyle.color.background,
                            borderWidth: 1
                        }}
                        onPress={saveSmoke}
                    >
                        <View style={{ flex: 3, justifyContent: 'center' }}>
                            <Text style={{ fontSize: GlobalStyle.width * 0.3, fontFamily: 'RobotoRegular', color: GlobalStyle.color.tabInactive }}>{dailyReport.count}</Text>
                        </View>
                        <View style={{ flex: 2, justifyContent: 'center' }}>
                            <Text style={{ fontSize: GlobalStyle.width * 0.15, fontFamily: 'RobotoBold', color: GlobalStyle.color.primary }}>SMOKE !</Text>
                        </View>

                    </TouchableOpacity>
                </View>
                <Flex size={10} />
            </View>
        </Layout>
    );
};
