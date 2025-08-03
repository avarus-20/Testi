import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, FlatList } from 'react-native';
const { calculateTotalCalories } = require('./source/calorieCounter');

export default function App() {
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');

  const addEntry = () => {
    if (!name || !calories) return;
    const newEntry = { name, calories: parseInt(calories, 10) };
    setEntries([...entries, newEntry]);
    setName('');
    setCalories('');
  };

  const total = calculateTotalCalories(entries);

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Calorie Tracker</Text>
      <View style={{ marginBottom: 20 }}>
        <TextInput
          placeholder="Food name"
          value={name}
          onChangeText={setName}
          style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
        />
        <TextInput
          placeholder="Calories"
          value={calories}
          onChangeText={setCalories}
          keyboardType="numeric"
          style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
        />
        <Button title="Add" onPress={addEntry} />
      </View>
      <FlatList
        data={entries}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>{`${item.name}: ${item.calories} kcal`}</Text>
        )}
      />
      <Text style={{ marginTop: 20, fontSize: 18 }}>Total: {total} kcal</Text>
    </SafeAreaView>
  );
}
