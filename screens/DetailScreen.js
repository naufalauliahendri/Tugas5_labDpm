import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Button, Icon } from 'react-native-elements';

export default function DetailScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://placeimg.com/640/480/nature' }}
        style={styles.image}
      />
      <Text style={styles.title}>Details Screen</Text>
      <Text style={styles.description}>
        This screen provides additional details and functionality. You can
        customize this space with more features!
      </Text>
      <Button
        title="Back to Home"
        buttonStyle={styles.button}
        icon={<Icon name="home" type="material" color="#fff" />}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fce4ec',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#d81b60',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#6a1b9a',
  },
  button: {
    backgroundColor: '#8e24aa',
    borderRadius: 5,
    paddingHorizontal: 20,
  },
});
