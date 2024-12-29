import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  FlatListComponent,
  PixelRatio,
} from "react-native";

import * as AC from "@bacons/apple-colors";
// import { Image } from "expo-image";
import Header from "@/components/header";
import { BodyScrollView } from "@/components/ui/BodyScrollView";

const bg = AC.systemBackground;

import * as Form from "@/components/ui/Form";
import { Link } from "expo-router";
export default function Page() {
  return (
    <View style={{ flex: 1 }}>
      <BodyScrollView
        contentContainerStyle={{
          padding: 16,
          gap: 24,
        }}
      >
        <Form.Section>
          <View style={{ alignItems: "center", gap: 8, padding: 16 }}>
            <Image
              source={{ uri: "https://github.com/expo.png" }}
              style={{
                aspectRatio: 1,
                height: 64,
                borderRadius: 8,
              }}
            />
            <Form.Text
              style={{
                fontSize: 20,
                fontWeight: "600",
              }}
            >
              React Scan for Safari
            </Form.Text>
            <Text
              style={{ textAlign: "center", fontSize: 14, color: AC.label }}
            >
              React Scan automatically detects performance issues in your React
              app
            </Text>
          </View>
        </Form.Section>

        <Form.Section>
          {/* Table style: | A   B |*/}
          <Link href="/ext-guide">Setup Instructions</Link>
        </Form.Section>

        <Form.Section title="Info">
          <Form.Link target="_blank" href="https://x.com/baconbrix">
            Evan Bacon
          </Form.Link>
          <Form.Link target="_blank" href="https://react-scan.com/">
            React Scan
          </Form.Link>
          <Form.Link
            target="_blank"
            href="https://github.com/EvanBacon/react-scan-safari-extension"
          >
            Source code
          </Form.Link>
        </Form.Section>
        <Form.Section title="Info">
          <Form.Link target="_blank" href="https://x.com/baconbrix">
            Evan Bacon
          </Form.Link>
          <Form.Link target="_blank" href="https://react-scan.com/">
            React Scan
          </Form.Link>
          <Form.Link
            target="_blank"
            href="https://github.com/EvanBacon/react-scan-safari-extension"
          >
            Source code
          </Form.Link>
        </Form.Section>
        <Form.Section title="Info">
          <Form.Link target="_blank" href="https://x.com/baconbrix">
            Evan Bacon
          </Form.Link>
          <Form.Link target="_blank" href="https://react-scan.com/">
            React Scan
          </Form.Link>
          <Form.Link
            target="_blank"
            href="https://github.com/EvanBacon/react-scan-safari-extension"
          >
            Source code
          </Form.Link>
        </Form.Section>
        <Form.Section title="Info">
          <Form.Link target="_blank" href="https://x.com/baconbrix">
            Evan Bacon
          </Form.Link>
          <Form.Link target="_blank" href="https://react-scan.com/">
            React Scan
          </Form.Link>
          <Form.Link
            target="_blank"
            href="https://github.com/EvanBacon/react-scan-safari-extension"
          >
            Source code
          </Form.Link>
        </Form.Section>

        <Image
          pointerEvents="none"
          resizeMode="repeat"
          style={{
            width: "100%",
            transform: [{ scale: process.env.EXPO_OS === "web" ? 1 : 2 }],
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
        {/* <Form.Section title="About">
          <Form.Text hint={Application.nativeApplicationVersion}>
            Version
          </Form.Text>
          <Form.Text hint={Application.nativeBuildVersion}>Build</Form.Text>
        </Form.Section> */}
      </BodyScrollView>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 128,
          maxHeight: 128,
          pointerEvents: "none",
        }}
      >
        <Header
          flip
          dom={{
            pointerEvents: "none",
            textInteractionEnabled: false,
            scrollEnabled: false,
            contentInsetAdjustmentBehavior: "never",
          }}
        />
      </View>

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
