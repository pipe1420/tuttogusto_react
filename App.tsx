/**
 * Codia React Native App
 * https://codia.ai
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior='automatic'
      >
        <View
          style={{
            width: 390,
            height: 844,
            backgroundColor: '#ffffff',
            opacity: 0.9,
            position: 'relative',
            overflow: 'hidden',
            marginTop: 0,
            marginRight: 'auto',
            marginBottom: 0,
            marginLeft: 'auto',
          }}
        >
          <ImageBackground
            style={{
              width: 321,
              height: 313,
              position: 'relative',
              zIndex: 4,
              marginTop: 196,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 19,
            }}
            source={require('./assets/images/0d88d7e57bb97d33d74262c6fddc189dc7545dab.png')}
            resizeMode='cover'
          />
          <View
            style={{
              width: 300,
              height: 60,
              backgroundColor: '#ff4b3a',
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              borderBottomRightRadius: 40,
              borderBottomLeftRadius: 40,
              position: 'relative',
              zIndex: 2,
              marginTop: 192,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 45,
            }}
          >
            <Text
              style={{
                display: 'flex',
                width: 116,
                height: 27,
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Nunito',
                fontSize: 18,
                fontWeight: '700',
                lineHeight: 24.552,
                color: '#ffffff',
                position: 'absolute',
                top: 16,
                left: '50%',
                textAlign: 'center',
                zIndex: 3,
                transform: [{ translateX: -59 }],
              }}
              numberOfLines={1}
            >
              Iniciar Sesión
            </Text>
          </View>
          <Text
            style={{
              width: 280,
              height: 25,
              fontFamily: 'Nunito',
              fontSize: 18,
              fontWeight: '700',
              lineHeight: 24.552,
              position: 'relative',
              textAlign: 'center',
              zIndex: 5,
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 55,
            }}
          >
            <Text
              style={{
                fontFamily: 'Nunito',
                fontSize: 18,
                fontWeight: '700',
                lineHeight: 24.552,
                color: '#ffffff',
                position: 'relative',
                textAlign: 'center',
              }}
            >
              No tienes cuenta?&nbsp;
            </Text>
            <Text
              style={{
                fontFamily: 'Nunito',
                fontSize: 18,
                fontWeight: '700',
                lineHeight: 24.552,
                color: '#ff4b3a',
                position: 'relative',
                textAlign: 'center',
                textDecorationLine: 'underline',
              }}
            >
              Registrate aquí
            </Text>
          </Text>
          <ImageBackground
            style={{
              width: 1920,
              height: 1076,
              position: 'absolute',
              top: -50,
              left: -728,
            }}
            source={require('./assets/images/d8b24ac5-ff70-4176-8df0-25be42dbcb98.png')}
            resizeMode='cover'
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
