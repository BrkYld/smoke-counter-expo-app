/* eslint-disable global-require */
import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import FlashMessage from 'react-native-flash-message';
import { Navigation } from './app/navigation';
import { LoaderProvider } from './app/contexts';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const loadFont = async () => {
    await Font.loadAsync({
      RobotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
      RobotoMedium: require('./assets/fonts/Roboto-Medium.ttf'),
      RobotoRegular: require('./assets/fonts/Roboto-Regular.ttf'),
    });
    setFontLoaded(true);
  };

  useEffect(() => {
    loadFont();
  }, []);

  return (

    fontLoaded ? (
      <>
        <LoaderProvider>
          <Navigation />
        </LoaderProvider>
        <FlashMessage position="top" />
      </>
    ) : null

  );
}
