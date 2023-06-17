import { OnboardScreen } from "./src/screens/OnboardScreen";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/components/Home";
import { ProfileScreen } from "./src/components/Profile";
import { NativeBaseProvider } from "native-base";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   Syne: require("../../assets/fonts/Syne/Syne-SemiBold.ttf"),
  // });

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ONBOARD"
            component={OnboardScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Welcome", headerBackButtonMenuEnabled: false }}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
