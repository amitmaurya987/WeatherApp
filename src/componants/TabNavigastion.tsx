import React from 'react';
import { View, StyleSheet, TouchableOpacity, } from 'react-native';
import Feather from "react-native-vector-icons/Feather";


type TabNavigationProps = {

  onTabPress?: (tab: 'home' | 'navigation' | 'calendar' | 'report') => void;
};

const TabNavigation: React.FC<TabNavigationProps> = ({ onTabPress=()=>{} }) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => onTabPress('home')}
      >
        <Feather name="map-pin" size={40} color="#E63946" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => onTabPress('navigation')}
      >
              <Feather name="map-pin" size={40} color="#E63946" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => onTabPress('calendar')}
      >
              <Feather name="map-pin" size={40} color="#E63946" />
        </TouchableOpacity>
    </View>
  );
}


export default TabNavigation;

const styles = StyleSheet.create({
  container: {
    flex:0,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  tabItem: {
  
  },
  icon: {
    width: 64,
    height: 64,
  },
  activeIcon:{

  }
});
