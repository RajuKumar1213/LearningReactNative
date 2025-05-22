// App.tsx
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, StatusBar } from 'react-native';
import ActionCard from './src/components/ActionCard';
import ContactList from './src/components/ContactList';
import PasswordGenerator from './src/components/PasswordGenerator';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <ScrollView >
        <ActionCard />
        <ContactList />
        <PasswordGenerator />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Hardcoded white background
  },

});

export default App;
