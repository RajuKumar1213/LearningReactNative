import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

const ActionCard = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const visitLink = (url : string) => {
    Linking.openURL(url);
  }

  return (
    <View>
      <Text style={styles.title}>This is my first Blog</Text>
      <View style={styles.card}>
        <Text style={styles.cardHeading}>
          What's new going on in the world of React Native?
        </Text>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2024/06/22/18/09/ai-generated-8846757_640.jpg',
          }}
          style={{height: 200}}
        />

        <Text style={styles.content}>
          React Native is a popular framework for building mobile applications
          using JavaScript and React. It allows developers to create
          cross-platform apps for iOS and Android using a single codebase. The
          framework has gained significant traction in the developer community
          due to its performance, ease of use, and ability to leverage native
          components.
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={()=> visitLink("https://reactnative.dev/")}
          >
            <Text style={styles.button}>Read more</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={()=> visitLink("https://drophaven-frontend.netlify.app/")}
          >
            <Text style={styles.button}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    backgroundColor: '#300a01', // Light mode background
    margin: 12,
    height: 'auto',
    paddingVertical: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
  cardHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'cyan',
    marginBottom: 16,
  },
  content: {
    marginTop: 8,
    fontSize: 14,
    margin: 8,
    textAlign: 'justify',
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,
    color: 'white',
    fontSize: 16,
  },
});

export default ActionCard;
