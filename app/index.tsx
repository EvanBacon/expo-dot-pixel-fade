import { StyleSheet, Text, View } from "react-native";

//
{
  /* <div class="framer-1205fn6" data-framer-name="Mask Pattern" style="background-color: transparent; background-image: radial-gradient(transparent 1px, var(--token-f32baa44-90b8-42a5-8bca-ffba9d95b23a, #ffffff) 1px); background-size: 4px 4px; backdrop-filter: blur(3px); mask: linear-gradient(rgb(0, 0, 0) 60%, rgba(0, 0, 0, 0) 100%); opacity: 1;"></div> */
}

export default function Page() {
  return (
    <div>
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
      <View
        style={{ position: "fixed", top: 0, left: 0, right: 0, height: 64 }}
      >
        <div
          style={{
            flex: 1,
            backgroundColor: "transparent",
            backgroundImage:
              "radial-gradient(transparent 1px, rgb(255, 255, 255) 1px)",
            backgroundSize: "4px 4px",
            backdropFilter: "blur(3px)",
            mask: "linear-gradient(rgb(0, 0, 0) 60%, rgba(0, 0, 0, 0) 100%)",
            opacity: 1,
          }}
        ></div>
      </View>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
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
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
