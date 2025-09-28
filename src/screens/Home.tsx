import React from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import AppButton from '../componants/AppButton';

const Home = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
         <Image
        source={require('../assets/images/img1.png')} // 👈 correct relative path
        style={styles.image}
        resizeMode="contain"
      />
      <View>
        <Text style={styles.text}>Weather</Text>
        <Text style={[styles.text,{color:"#DDB130"}]}>ForeCasts</Text>
      </View>
      <View>
        <AppButton
        title="Get Start"
       onPress={() => navigation.replace("MainTabs")}
        style={{ marginTop: 80 }}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
 backgroundColor:"#7A2D91"
  },
  text: {
    fontSize: 64,
    fontWeight: 'bold',
    textAlign:"center",
    color:"#fff"

  },
  image:{
    width:"100%"
  }
});

export default Home;
