import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    height: 4,
    borderRadius: 2,
    position: "relative",
    overflow: "hidden"
  },
  progress: {
    height: "100%",
    borderRadius: 2,
    position: "absolute",
    width: "100%",
    top: 0,
    bottom: 0,
    left: "-100%",
    ...Platform.select({ web: { transition: "0.3s all ease-in-out" } })
  }
});
