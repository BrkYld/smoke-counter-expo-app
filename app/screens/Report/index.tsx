/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-mixed-operators */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { GlobalStyle } from '../../constants/GlobalStyle';
import { Flex } from '../../components/Flex';
import { LoaderContext } from '../../contexts';
import { Layout } from '../Layout';
import { Style } from './Style';
import { ReportContext } from '../../contexts/ReportContext';
import { Service } from '../../client';
import Modal from 'react-native-modal';
import { ButtonMd } from '../../components';
import MapView, { LatLng, Marker } from 'react-native-maps';


interface DailyDetailProps {
    item: DailyReport,
    navigation: any,
    setTimeLine: React.Dispatch<React.SetStateAction<ModalProps>>,
    setMapView: React.Dispatch<React.SetStateAction<ModalProps>>
}

interface TimeReportProps {
    item: ReportDetail
}

interface ModalProps {
    isVisible: boolean,
    data: ReportDetail[],
}


const TimeReport = ({ item }: TimeReportProps) => {
    return (
        <>
            <View style={{ width: GlobalStyle.width * 0.8, height: GlobalStyle.height * 0.1 }}>
                <View style={{ backgroundColor: GlobalStyle.color.secondaryLight, width: GlobalStyle.width * 0.8, height: GlobalStyle.height * 0.08, justifyContent: 'center', alignItems: 'center', borderRadius: 100 }}>
                    <Text style={{ fontFamily: 'RobotoRegular', fontSize: GlobalStyle.width * 0.08, color: GlobalStyle.color.primary }}>{`${item.time.hours}:${item.time.minutes}:${item.time.seconds}`}</Text>
                </View>
            </View>
            <Flex size={1} />
        </>
    );
};

const DailyDetail = ({ item, navigation, setTimeLine, setMapView }: DailyDetailProps) => {
    return (
        <>
            <View style={Style.dailyDetailContainer}>
                <View style={Style.dailyDetailWrapper}>
                    <View style={Style.dailyDetailTitle}>
                        <Text style={Style.dailyDetailPeriodText}>
                            {item.day}
                        </Text>
                        <Text style={{
                            color: false ? GlobalStyle.color.secondary : GlobalStyle.color.primary,
                            fontSize: GlobalStyle.width * 14 / 375,
                            fontFamily: 'RobotoRegular',
                            fontWeight: '700',
                        }}
                        >
                            {`${item.count} SİGARA`}
                        </Text>
                    </View>
                    <View style={Style.dailyDetailContentContainer}>
                        <View style={Style.dailyDetailContentItem}>
                            <View style={Style.dailyDetailContentTitle}>
                                <TouchableOpacity onPress={() => setTimeLine({ isVisible: true, data: item.detail })}>
                                    <MaterialCommunityIcons name="timeline-clock-outline" size={GlobalStyle.height * 40 / 657} color={GlobalStyle.color.secondary} />
                                </TouchableOpacity>
                            </View>
                            <View style={Style.dailyDetailContentTitle}>
                                <TouchableOpacity onPress={() => setMapView({ isVisible: true, data: item.detail })}>
                                    <FontAwesome5 name="search-location" size={GlobalStyle.height * 35 / 657} color={GlobalStyle.color.primary} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
};



export const Report = ({ navigation }: any) => {
    const { showLoader, hideLoader } = useContext(LoaderContext);
    const { smokingReport, dailyReport, setSmokingReport } = useContext(ReportContext)
    const [timeLine, setTimeLine] = useState<ModalProps>({ isVisible: false, data: [] })
    const [mapView, setMapView] = useState<ModalProps>({ isVisible: false, data: [] })
    useEffect(() => {
        showLoader();
        Service.User.GetSmokingReport().then(({ error, message, data }) => {
            hideLoader();
            if (error === false) {
                setSmokingReport(data)
            }
        })
    }, [dailyReport])
    return (
        <Layout title="Raporlar" scroll={false} navigation={navigation}>
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Flex size={10} />
                <View style={{ flex: 473 }}>
                    <FlatList key={1} showsVerticalScrollIndicator={false} data={smokingReport} renderItem={({ item }) => <DailyDetail setMapView={setMapView} setTimeLine={setTimeLine} item={item} navigation={navigation} />} keyExtractor={item => item.day}> </FlatList>
                </View>
                <Flex size={10} />
            </View>
            <Modal isVisible={timeLine.isVisible} style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Flex size={0.5} />
                <View style={{ flex: 1.5 }}>
                    <FlatList key={2} showsVerticalScrollIndicator={false} data={timeLine.data} renderItem={({ item }) => <TimeReport item={item} />} keyExtractor={item => `${item.time.hours}:${item.time.minutes}:${item.time.seconds}`}> </FlatList>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ButtonMd onPress={() => setTimeLine({ isVisible: false, data: [] })} type="success" title="Kapat" />
                </View>
            </Modal>
            <Modal isVisible={mapView.isVisible} style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Flex size={0.5} />
                <View style={{  backgroundColor:'white' }}>
                    <MapView scrollEnabled style={{width:350, height:350}}>
                        {mapView.data.map((report: ReportDetail, index: number) => (
                            <Marker
                                key={index}
                                coordinate={{ latitude: parseFloat(report.location.x), longitude: parseFloat(report.location.y) } as LatLng}
                            />
                        ))}
                    </MapView>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ButtonMd onPress={() => setMapView({ isVisible: false, data: [] })} type="success" title="Kapat" />
                </View>
            </Modal>
        </Layout>
    );
};
