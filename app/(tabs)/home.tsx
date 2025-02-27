import { StyleSheet, Text, View } from "react-native"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { Colors } from "@/constants/Colors"
import { name } from "@/constants/Config"
import React from "react"

const debug_border = false

export default function HomeScreen() {
  return (
    <View style={[styles.container, debug_border && styles.debug_border]}>
      <View style={[styles.welcomeContainer, debug_border && styles.debug_border]}>
        <ThemedText type={"title"}>Welcome {name}</ThemedText>
      </View>
      <View style={[styles.mainContainer, debug_border && styles.debug_border]}>
        <ThemedText style={{ color: Colors.light.text }} type={"default"}>
          Welcome!
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
    // backgroundColor: "white",
  },
  welcomeContainer: {
    flex: 1,
    width: "90%",
    alignItems: "flex-start",
    justifyContent: "center",
    margin: 2,
  },
  mainContainer: {
    flex: 5,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  debug_border: { borderWidth: 2, borderColor: "rgb(255, 0, 0)" },
})
