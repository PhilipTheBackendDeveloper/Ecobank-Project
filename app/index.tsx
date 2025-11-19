import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      router.replace("/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ImageBackground
      source={require("../assets/images/bg-gradient.jpg")}
      style={styles.background}
    >
      <View style={styles.content}>
        <Image
          source={require("../assets/images/white-logo1.png")}
          style={styles.logo}
        />
      </View>

      {loading && (
        <Text style={styles.text}>
          Making sure your connection is secure...
        </Text>
      )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  text: {
    color: "white",
    fontSize: 12,
    position: "absolute",
    bottom: 40,
    textAlign: "center",
  },
});
