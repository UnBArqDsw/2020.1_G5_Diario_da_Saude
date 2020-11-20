import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  contactButton: {
    backgroundColor: "#cccddd",
    flex: 1,
    height: 56,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    marginLeft: 16,
    marginBottom: 16
  },

  contactButtonText: {
    color: "#000",

    fontSize: 16,
    marginLeft: 16
  }
});

export default styles;
