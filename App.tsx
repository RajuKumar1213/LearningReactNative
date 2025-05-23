// App.tsx
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import ActionCard from './src/components/ActionCard';
import ContactList from './src/components/ContactList';
import PasswordGenerator from './src/components/PasswordGenerator';

function App(): React.JSX.Element {
  const [backgroundColor, setBackgroundColor] = React.useState('#fffff');
  const [squareColor, setSquareColor] = React.useState('#ff0000');
  const [rectangleColor, setRectangleColor] = React.useState('#00ff00');
  const [circleColor, setCircleColor] = React.useState('#0000ff');
  const [triangleColor, setTriangleColor] = React.useState('#ffff00');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setBackgroundColor(color);
  };

  const generateSquareColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setSquareColor(color);
  };
  const generateRectangleColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setRectangleColor(color);
  };
  const generateCircleColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setCircleColor(color);
  };
  const generateTriangleColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setTriangleColor(color);
  };

  return (
    <>
      {/* <ScrollView>
        <ActionCard />
        <ContactList />
        <PasswordGenerator />
      </ScrollView> */}

      <StatusBar backgroundColor={backgroundColor} />
      <View style={[styles.container, {backgroundColor: backgroundColor}]}>
        <View style={[styles.square, {backgroundColor: squareColor}]}>
          <Text>Square</Text>
        </View>
        <View style={[styles.rectangle, {backgroundColor: rectangleColor}]}>
          <Text>rectangle</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            generateSquareColor();
            generateRectangleColor();
            generateTriangleColor();
            generateCircleColor();
            generateColor();
          }}
          activeOpacity={0.7}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionTxtBtn}>Press me</Text>
          </View>
        </TouchableOpacity>
        <View style={[styles.circle, {backgroundColor: circleColor}]}>
          <Text>circle</Text>
        </View>
        <View style={[styles.triangle, {backgroundColor: triangleColor}]}>
          <Text>triangle</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    backgroundColor: '#b07207d2',
    marginVertical: 20,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  actionTxtBtn: {
    color: '#fff',
    fontWeight: 'bold',
  },
  square: {
    width: 100,
    height: 100,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {
    width: 200,
    height: 100,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#ff0000',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{rotate: '180deg'}],
  },
});

export default App;
