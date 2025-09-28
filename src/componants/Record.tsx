import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

type RecordProps = {
  time: string;
  temperature: string;
};

const Record: React.FC<RecordProps> = ({ time, temperature }) => {
  return (
    <View style={styles.container}>
  <Text style={styles.text}>{temperature}°C</Text>
      <Image 
    source={require('../assets/images/img1.png')}
       style={styles.icon} 
       resizeMode="contain" />
            <Text style={styles.text}>{time}</Text>
  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:0,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
  icon: {
    width: 64,
    height: 64,
  },
});

export default Record;
