import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MainScreen from "./MainScreen";
import SettingsScreen from "./SettingsScreen";
import ScarchScreen from "./ScarchScreen";
import Icon from "react-native-vector-icons/FontAwesome";

type TabParamList = {
  Home: undefined;
  Main: undefined;
  Settings: undefined;
  Search: undefined;
};


const Tab = createBottomTabNavigator<TabParamList>();


function getTabBarIcon(routeName: string, color: string, size: number) {
  let iconName: string = "circle";
  if (routeName === "Main") iconName = "home";
  else if (routeName === "Search") iconName = "user";
  else if (routeName === "Settings") iconName = "cog";
  return <Icon name={iconName} size={size} color={color} />;
}

export function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#007bff",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ color, size }) => getTabBarIcon(route.name, color, size),
      })}
    >
      <Tab.Screen name="Main" component={MainScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Search" component={ScarchScreen} />
    </Tab.Navigator>
  );
}
