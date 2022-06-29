import React, { useLayoutEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, SafeAreaView, ViewPropTypes, View, Text, Dimensions, StatusBar, StyleSheet } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { HeaderButton } from '../../components';
import { GlobalStyle } from '../../constants/GlobalStyle';
import { Style } from './Style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;

interface Props {
    navigation: any,
    title : any,
    children : any,
    scroll : any,
    style: any,
    backButton : any,
    drawerButton : any,
    filterButton : any,
    logoutButton: any
}

export const Layout = ({ navigation, title, children, scroll, style, backButton, drawerButton, filterButton, logoutButton } : Props) : JSX.Element => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: {
        height: windowWidth * 0.25,
        backgroundColor: GlobalStyle.color.primary,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
      },
      headerTitle: () => <Text style={Style.headerTitle}>{title}</Text>,
      headerLeft: () => (
        <View style={{ flexDirection: 'row', marginLeft: 7 }}>
          {filterButton && (
            <HeaderButton
              icon="filter-outline"
              type="ionicon"
              onPress={() => {
                navigation.toggleDrawer();
              }}
              color={GlobalStyle.color.white}
              disabled={false}
            />
          )}
          {backButton && (
            <HeaderButton
              icon="arrow-back"
              type="ionicon"
              onPress={() => {
                try {
                  navigation.pop();
                } catch {
                  navigation.goBack();
                }
              }}
              color={GlobalStyle.color.white}
              disabled={false}
            />
          )}
          {
            drawerButton && (
              <HeaderButton
                icon="menu-outline"
                type="ionicon"
                onPress={() => {
                  navigation.toggleDrawer();
                }}
                color={GlobalStyle.color.white}
                disabled={false}
              />
            )
          }
        </View>
      ),
      headerRight: () => (
        <>
          {logoutButton ? (
            <View style={{ flexDirection: 'row', marginRight: 7 }}>
              <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <HeaderButton
                  icon="exit-outline"
                  type="ionicon"
                  onPress={() => {
                   AsyncStorage.removeItem('user').then(() => { navigation.replace('StackScreen'); });
                }}
                  color={GlobalStyle.color.white}
                  disabled={false}
                />
              </View>
            </View>
          ) : (
            <View style={{ flexDirection: 'row', marginRight: 7 }} />
          )}
        </>
      ),
    });
  }, [navigation, title]);
  return (
    <SafeAreaView style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto' }}>
      <StatusBar barStyle="light-content" />
      {scroll ?
        (
          <ScrollView style={[{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto' }, style]}>
            {children}
          </ScrollView>
        )
        :
        (
          <View style={[{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto' }, style]}>
            {children}
          </View>
        )
      }
    </SafeAreaView>
  );
};

Layout.propTypes = {
  navigation: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  scroll: PropTypes.bool,
  style: PropTypes.object,
  backButton: PropTypes.bool,
  drawerButton: PropTypes.bool,
  shoppingCartButton: PropTypes.bool,
  logoutButton: PropTypes.bool,
  filterButton: PropTypes.bool,
  title: PropTypes.string,
};

Layout.defaultProps = {
  scroll: true,
  style: {},
  backButton: false,
  drawerButton: false,
  logoutButton: false,
  shoppingCartButton: false,
  filterButton: false,
  title: '',
};
