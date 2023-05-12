import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const TipCalculator = () => {
  const [bill, setBill] = useState('');
  const [tipPercent, setTipPercent] = useState('');
  const [tipAmount, setTipAmount] = useState<number | null>(null);

  const calculateTip = () => {
    const billFloat = parseFloat(bill);
    const tipPercentFloat = parseFloat(tipPercent);
    if (!isNaN(billFloat) && !isNaN(tipPercentFloat)) {
      setTipAmount((billFloat * tipPercentFloat) / 100);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tip Calculator</Text>
      <TextInput
        style={styles.input}
        value={bill}
        onChangeText={setBill}
        placeholder="Bill Amount"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={tipPercent}
        onChangeText={setTipPercent}
        placeholder="Tip Percentage"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={calculateTip}>
        <Text style={styles.buttonText}>Calculate Tip</Text>
      </TouchableOpacity>
      {tipAmount !== null && (
        <Text style={styles.result}>Tip Amount: {tipAmount.toFixed(2)}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#DDDDDD',
  },
  title: {
    color: '#2793d5',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#2793d5',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2793d5',
    padding: 15,
    marginBottom: 10,
    borderRadius: 25,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  result: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default TipCalculator;
