/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextStyle } from 'react-native';
import { Flex } from '../Flex';
import { Style } from './Style';
import TabBarBraceRight from '../svgs/TabBarBreceRight'

interface Props {
    descriptors: any,
    activeTintColor?: String,
    inactiveTintColor?: String,
    labelStyle?: Object,
    state: any,
    style?: Object,
    navigation: any,
}

export const MainTabBar = ({ activeTintColor, descriptors, inactiveTintColor, labelStyle, navigation, state, style }: Props): JSX.Element => {
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        setIsVisible(true);
    }, [descriptors]);
    return (
        <>
            {isVisible && (
                <View style={style}>
                    {state.routes.map((route: any, index : number) => {
                        const { options } = descriptors[route.key];
                        const isFocused = state.index === index;
                        if (isFocused && options.tabBarVisible === false) {
                            setIsVisible(false);
                        }
                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                            });

                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate(route.name);
                            }
                        };

                        const onLongPress = () => {
                            navigation.emit({
                                type: 'tabLongPress',
                                target: route.key,
                            });
                        };
                        return (
                            <>
                                <Flex size={0.1} />
                                {
                                    route.name === 'AccountBottomTab' ? (
                                        <>
                                            <View style={Style.tabBar}>
                                                <TouchableOpacity
                                                    accessibilityRole="button"
                                                    accessibilityState={isFocused ? { selected: true } : {}}
                                                    accessibilityLabel={options.tabBarAccessibilityLabel}
                                                    testID={options.tabBarTestID}
                                                    onPress={onPress}
                                                    activeOpacity={1}
                                                    onLongPress={onLongPress}
                                                    style={Style.tabButton}
                                                >
                                                    {options.tabBarIcon({ focused: isFocused })}
                                                    <Flex size={0.7} />
                                                    <Text style={{ ...labelStyle, color: isFocused ? activeTintColor : inactiveTintColor, fontSize: 15 } as TextStyle}>{options.tabBarLabel}</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={Style.brace}>
                                                <TabBarBraceRight />
                                            </View>
                                        </>
                                    ) : (
                                        <View style={Style.tabBar}>
                                            <TouchableOpacity
                                                accessibilityRole="button"
                                                accessibilityState={isFocused ? { selected: true } : {}}
                                                accessibilityLabel={options.tabBarAccessibilityLabel}
                                                testID={options.tabBarTestID}
                                                onPress={onPress}
                                                activeOpacity={1}
                                                onLongPress={onLongPress}
                                                style={Style.tabButton}
                                            >
                                                {options.tabBarIcon({ focused: isFocused })}
                                                <Flex size={0.7} />
                                                <Text style={{ ...labelStyle, color: isFocused ? activeTintColor : inactiveTintColor } as TextStyle}>{options.tabBarLabel}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                }
                            </>
                        );
                    })}
                    <Flex size={0.1} />
                </View>
            )}

        </>
    );
};
