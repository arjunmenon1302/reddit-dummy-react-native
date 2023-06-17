import { Splash } from "./src/screens/SplashScreen";
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
            name="Splash"
            component={Splash}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );

  // return (
  //   <View style={styles.container}>
  //     {/* <Splash /> */}
  //     <Text>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
