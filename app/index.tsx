import { ScrollView, Image, StyleSheet, Text, View } from "react-native";

import * as AC from "@bacons/apple-colors";
// import { Image } from "expo-image";
import Header from "@/components/header";
import { BodyScrollView } from "@/components/ui/BodyScrollView";

const bg = AC.systemBackground;

export default function Page() {
  return (
    <View style={{ flex: 1 }}>
      <BodyScrollView contentContainerStyle={{ paddingBottom: 128 }}>
        <View style={styles.container}>
          <View style={styles.main}>
            <Text style={styles.title}>Hello World</Text>
            <Text style={styles.subtitle}>
              This is the first page of your app.
            </Text>
            <Text style={styles.subtitle}>
              This is the first page of your app.
            </Text>
            <Text style={styles.subtitle}>
              This is the first page of your app.
            </Text>
            <Text style={styles.subtitle}>
              This is the first page of your app.
            </Text>
            <Text style={styles.subtitle}>
              This is the first page of your app.
            </Text>
            <Text style={styles.subtitle}>
              This is the first page of your app.
            </Text>
            <Text style={styles.subtitle}>
              This is the first page of your app.
            </Text>
            <Text style={styles.subtitle}>
              This is the first page of your app.
            </Text>
          </View>
        </View>
      </BodyScrollView>
      <Header
        flip
        dom={{
          contentInsetAdjustmentBehavior: "never",
          containerStyle: {
            position: "absolute",
            display: "flex",
            bottom: 0,
            left: 0,
            right: 0,
            height: 128,
          },
        }}
      />

      {/* <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          pointerEvents: "none",
          opacity: 0.06,
          backgroundSize: 128,
          backgroundRepeat: "repeat",
          backgroundImage: `url(${
            require("@/assets/images/motion-drop.png").uri
          })`,
          zIndex: 999,
        }}
      /> */}

      <Image
        pointerEvents="none"
        resizeMode="repeat"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",

          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          opacity: 0.06,
          zIndex: 999,
        }}
        source={require("@/assets/images/motion-drop.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: bg,
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    color: AC.label,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 56,
    color: AC.secondaryLabel,
  },
});
