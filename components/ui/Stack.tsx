import { Stack as NativeStack } from "expo-router";
import { View } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";

// These are the default stack options for iOS, they disable on other platforms.
const DEFAULT_STACK_HEADER: import("@react-navigation/native-stack").NativeStackNavigationOptions =
  process.env.EXPO_OS !== "ios"
    ? {}
    : {
        headerTransparent: true,
        // headerBlurEffect: "systemChromeMaterial",
        // headerShadowVisible: true,
        headerLargeTitleShadowVisible: false,
        headerLargeStyle: {
          backgroundColor: "transparent",
        },
        headerLargeTitle: false,
      };

import Header from "@/components/header";
import { BlurView } from "expo-blur";
export default function Stack({
  screenOptions,
  ...props
}: React.ComponentProps<typeof NativeStack>) {
  return (
    <NativeStack
      screenOptions={{
        ...DEFAULT_STACK_HEADER,
        ...screenOptions,
        headerBackground() {
          console.log(props);
          // Custom header view
          return (
            <View
              style={{
                flex: 1,
                maxHeight: 96,
                pointerEvents: "none",
              }}
            >
              <MaskedView
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
                maskElement={
                  <View
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      width: "100%",
                      height: "100%",
                      experimental_backgroundImage: `linear-gradient(black 60%, rgba(255, 255, 255, 0) 100%)`,
                    }}
                  />
                }
              >
                <BlurView
                  intensity={60}
                  tint={"default"}
                  style={{
                    flex: 1,
                  }}
                />
              </MaskedView>
              <Header
                style={{
                  height: 96,
                }}
                dom={{
                  pointerEvents: "none",
                  textInteractionEnabled: false,
                  scrollEnabled: false,
                  contentInsetAdjustmentBehavior: "never",
                  matchContents: true,
                  containerStyle: {
                    position: "absolute",
                    flex: 1,
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                  },
                }}
              />
            </View>
          );
        },
      }}
      {...props}
    />
  );
}

Stack.Screen = NativeStack.Screen;
