import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View, FlatList } from "react-native"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { Colors } from "@/constants/Colors"
import { name } from "@/constants/Config"
import React from "react"

const debug_border = false

export default function HomeScreen() {
  const [listData, setListData] = React.useState(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", ""])

  const profileButtonPressed = () => {
    alert("Profile Button Pressed")
  }

  const renderListItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.itemList} onPress={() => console.log("Item Pressed")}>
        <ThemedText type={"defaultSemiBold"} style={{ color: "black", fontSize: 20, paddingVertical: 10 }}>
          {item}
        </ThemedText>
      </TouchableOpacity>
    )
  }

  function TrackerList({ data }) {
    return (
      <View style={[{ flex: 1, justifyContent: "center", alignContent: "center" }, debug_border && styles.debug_border]}>
        <FlatList data={data} renderItem={renderListItem} />
      </View>
    )
  }

  return (
    <View style={[styles.container, debug_border && styles.debug_border]}>
      <View style={[styles.welcomeContainer, debug_border && styles.debug_border]}>
        <ThemedText type={"title"} style={[styles.textBox, debug_border && styles.debug_border]}>
          Tracker
        </ThemedText>
        <TouchableOpacity onPress={profileButtonPressed} style={styles.profileContainer}>
          <ThemedText type={"default"} style={[{ fontSize: 20 }, debug_border && styles.debug_border]}>
            {name}
          </ThemedText>
        </TouchableOpacity>
      </View>
      <View style={[styles.mainContainer, debug_border && styles.debug_border]}>
        <TrackerList data={listData} />
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
    alignItems: "center",
    justifyContent: "space-between",
    margin: 2,
  },
  mainContainer: {
    flex: 6,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    backgroundColor: Colors.light.background,
  },
  profileContainer: {
    justifyContent: "center",
    borderRadius: 10,
    padding: 10,
    backgroundColor: Colors.light.tint,
  },

  textBox: { paddingTop: 5 },
  debug_border: { borderWidth: 2, borderColor: "rgb(255, 0, 0)" },
})
