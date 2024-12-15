import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Card, Button, Text } from 'react-native-elements';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://placeimg.com/640/480/tech' }}
        style={styles.headerImage}
      />
      <Card containerStyle={styles.card}>
        <Card.Title>Welcome to My App</Card.Title>
        <Card.Divider />
        <Text style={styles.text}>
          Explore the features of this application. Click below to learn more!
        </Text>
        <Button
          title="Go to Details"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('Details')}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3f2fd',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  headerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  card: {
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 15,
    color: '#455a64',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#00796b',
  },
});
