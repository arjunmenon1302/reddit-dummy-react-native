import React, { useCallback, useEffect, useState } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { Box, Heading, Factory, Image, Flex, Text, Button } from "native-base";
import { useFonts } from "expo-font";

export const OnboardScreen = ({ navigation }: any) => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      // Keep the splash screen visible
      await SplashScreen.preventAutoHideAsync();
      // Do what you need before the splash screen gets hidden
      console.log(
        "I'm a task that gets executed before splash screen disappears"
      );
      // Then tell the application to render
      setAppIsReady(true);
    }
    prepare();
  }, []);

  if (appIsReady) {
    // Hide the splash screen
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 1000);
  }
  return (
    <View style={styles.container}>
      <Flex>
        <Box minH="513px" mt="50px">
          <Image
            source={require("../../assets/SplashScreenBox.png")}
            alt="Alternate Text"
            resizeMode="contain"
          />
        </Box>
        <Flex mt="20px" px="30px">
          <Flex textAlign="left" justifyContent="center">
            <Heading size="lg">Welcome to {"\n"}the NBM Forum</Heading>
            <Text mt="5px">
              Time to get all the answers you need in a forum made for designers
              and developers!
            </Text>
          </Flex>
          <Button
            size={"lg"}
            mt="40px"
            mb="100px"
            borderRadius="none"
            bg="#6537FF"
            onPress={() => navigation.navigate("Home", { name: "Jane" })}
          >
            <Text color="white">Jump in!</Text>
          </Button>
        </Flex>
      </Flex>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});
