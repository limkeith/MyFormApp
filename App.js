import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [likeCoffee, setLikeCoffee] = useState('Yes');

  const handleSubmit = () => {
    const coffeePreference = likeCoffee === 'Yes' ? 'I like coffee.' : "I don't like coffee.";
    Alert.alert(
      'Summary',
      `My name is ${name}, I am ${age} years old. ${coffeePreference}`
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Your Name:</Text>
        <TextInput
          style={styles.inputInline}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Your Age:</Text>
        <TextInput
          style={styles.inputInline}
          placeholder="Enter your age"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
        />
      </View>

      <Text style={styles.label}>Like Coffee?</Text>
      <View style={styles.radioGroup}>
        <View style={styles.radioButton}>
          <RadioButton
            value="Yes"
            status={likeCoffee === 'Yes' ? 'checked' : 'unchecked'}
            onPress={() => setLikeCoffee('Yes')}
          />
          <Text>Yes</Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton
            value="No"
            status={likeCoffee === 'No' ? 'checked' : 'unchecked'}
            onPress={() => setLikeCoffee('No')}
          />
          <Text>No</Text>
        </View>
      </View>

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginRight: 8,
    width: 100, // Ensure alignment between rows
  },
  inputInline: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    flex: 1, // Takes the remaining width
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
});
