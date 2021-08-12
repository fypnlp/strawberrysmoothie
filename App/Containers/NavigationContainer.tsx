import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import React, { useCallback, useState } from 'react';
import Instructions from './InstructionsContainer';
import Dashboard from './DashboardContainer';
import Settings from './SettingsContainer';
import Sidemenu from './SidemenuContainer';

import AppContext from '../Services/AppContext';

const BottomTabs = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

console.disableYellowBox = true;

const Tabs = () => (
    <BottomTabs.Navigator
        initialRouteName="Instructions"
        activeColor="white"
        inactiveColor="grey"
        barStyle={{ backgroundColor: '#5741d9' }}>
        <BottomTabs.Screen
            name="Instructions"
            component={Instructions}
            options={{
                tabBarTestID: 'Instructions tab',
                title: 'Instructions',
                tabBarIcon: ({ color }) => (
                    <Icon name="book-open" color={color} size={22} />
                ),
            }}
        />
        <BottomTabs.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
                tabBarTestID: 'Dashboard tab',
                title: 'Dashboard',
                tabBarIcon: ({ color }) => (
                    <Icon name="list" color={color} size={22} />
                ),
            }}
        />
        <BottomTabs.Screen
            name="Settings"
            component={Settings}
            options={{
                tabBarTestID: 'Settings tab',
                title: 'Settings',
                tabBarIcon: ({ color }) => (
                    <Icon name="settings" color={color} size={22} />
                ),
            }}
        />
    </BottomTabs.Navigator>
);

function Navigation() {
    const [onlyShowBitcoin, setOnlyShowBitcoin] = useState(false);
    const [onlyShowWinners, setOnlyShowWinners] = useState(false);
    const [onlyShowLosers, setOnlyShowLosers] = useState(false);

    const toggleOnlyShowBitcoin = useCallback(() => {
        setOnlyShowBitcoin(!onlyShowBitcoin);
    }, [onlyShowBitcoin, setOnlyShowBitcoin]);

    const toggleOnlyShowWinners = useCallback(() => {
        setOnlyShowWinners(!onlyShowWinners);
        if (onlyShowLosers) {
            setOnlyShowLosers(false);
        }
    }, [onlyShowWinners, onlyShowLosers]);

    const toggleOnlyShowLosers = useCallback(() => {
        setOnlyShowLosers(!onlyShowLosers);
        if (onlyShowWinners) {
            setOnlyShowWinners(false);
        }
    }, [onlyShowLosers, onlyShowWinners]);

    return (
        <AppContext.Provider
            value={{
                onlyShowBitcoin,
                onlyShowWinners,
                onlyShowLosers,
                toggleOnlyShowBitcoin,
                toggleOnlyShowWinners,
                toggleOnlyShowLosers,
            }}>
            <Drawer.Navigator
                drawerContent={(props) => <Sidemenu {...props} />}>
                <Drawer.Screen name="Tabs" component={Tabs} />
            </Drawer.Navigator>
        </AppContext.Provider>
    );
}

export default Navigation;
