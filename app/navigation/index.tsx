/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Login, Register, Report } from '../screens';
import { GlobalStyle } from '../constants/GlobalStyle';
import TabIcons from '../components/svgs/TabIcons';
import { MainTabBar } from '../components';
import { ReportProvider } from '../contexts/ReportContext';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
const RootStack = createStackNavigator();
const LoginStack = createStackNavigator();
const RegisterStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ReportStack = createStackNavigator();
const forFade = ({ current }: any) => ({
    cardStyle: {
        opacity: current.progress,
    },
});

// Stack Components
const LoginScreen = () => (
    <LoginStack.Navigator screenOptions={{ headerShown: false }}>
        <LoginStack.Screen options={{ gestureEnabled: false }} name="Login" component={Login} />
    </LoginStack.Navigator>
);

const RegisterScreen = () => (
    <RegisterStack.Navigator screenOptions={{ headerShown: false }}>
        <RegisterStack.Screen options={{ gestureEnabled: false }} name="Register" component={Register} />
    </RegisterStack.Navigator>
);

const HomeScreen = () => (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
        <HomeStack.Screen options={{ gestureEnabled: false }} name="Home" component={Home} />
    </HomeStack.Navigator>
);

const ReportScreen = () => (
    <ReportStack.Navigator screenOptions={{ headerShown: false }}>
        <ReportStack.Screen options={{ gestureEnabled: false }} name="Home" component={Report} />
    </ReportStack.Navigator>
);

// Bottom Tab
const BottomTab = () => {
    return (
        <ReportProvider>
            <Tab.Navigator
                initialRouteName="HomeScreen"
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: GlobalStyle.color.primary,
                    tabBarInactiveTintColor: GlobalStyle.color.tabInactive,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        let iconName;
                        const iconColor = focused ? GlobalStyle.color.primary : GlobalStyle.color.tabInactive;
                        if (route.name === 'ReportScreen') {
                            iconName = 'report';
                        } else if (route.name === 'HomeScreen') {
                            iconName = 'home';
                        }
                        return (
                            <TabIcons iconName={iconName} props={{}} fillColor={iconColor} />
                        );
                    },
                })}
            >
                <Tab.Screen
                    options={() => ({
                        tabBarLabel: 'Ana Sayfa',
                        cardStyleInterpolator: forFade,
                    })}
                    name="HomeScreen"
                    component={HomeScreen}
                />
                <Tab.Screen
                    options={() => ({
                        tabBarLabel: 'Raporlar',
                        cardStyleInterpolator: forFade,
                    })}
                    name="ReportScreen"
                    component={ReportScreen}
                />
            </Tab.Navigator>
        </ReportProvider>
    );
};

// Stack Component
const StackScreen = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
);

// Root Stack
const Root = () => (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen options={{ gestureEnabled: false }} name="StackScreen" component={StackScreen} />
        <RootStack.Screen options={{ gestureEnabled: false }} name="TabScreen" component={BottomTab} />
    </RootStack.Navigator>
);

export const Navigation = () => (
    <NavigationContainer>
        <Root />
    </NavigationContainer>

);
