import { StyleSheet, Text, View } from "react-native"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { Colors } from "@/constants/Colors"
import { name } from "@/constants/Config"
import React from "react"

const debug_border = true

export default function HomeScreen() {
  return (
    <View style={[styles.container, debug_border && styles.debug_border]}>
      <View style={[styles.welcomeContainer, debug_border && styles.debug_border]}>
        <ThemedText type={"title"} style={[styles.textBox, debug_border && styles.debug_border]}>
          Tracker
        </ThemedText>
        <ThemedText type={"default"} style={[styles.textBox, { fontSize: 24 }, debug_border && styles.debug_border]}>
          {name}
        </ThemedText>
      </View>
      <View style={[styles.mainContainer, debug_border && styles.debug_border]}>
        <ThemedText style={{ color: Colors.light.text }} type={"default"}>
          Text
        </ThemedText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    paddingTop: 10,
    backgroundColor: Colors.dark.background,
  },
  welcomeContainer: {
    flex: 1,
    flexDirection: "row",
    width: "90%",
    alignItems: "stretch",
    justifyContent: "center",
    margin: 2,
  },
  mainContainer: {
    flex: 5,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    backgroundColor: Colors.light.background,
  },
  textBox: { flex: 1, paddingTop: 5 },
  debug_border: { borderWidth: 2, borderColor: "rgb(255, 0, 0)" },
})
