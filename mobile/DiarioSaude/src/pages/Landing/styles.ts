import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonsContainer: {
    justifyContent: "space-between"
  },

  buttonEntrar: {
    backgroundColor: "#0124A2",
    marginBottom: 60,
    height: 40,
    width: 300,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "center"
  },

  buttonCadastrar: {
    backgroundColor: "#0124A2",
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "center"
  },

  textButton: {
    color: "#fff",
    fontSize: 20
  },

  logo: {
    marginBottom: 80
  }
});

export default styles;
