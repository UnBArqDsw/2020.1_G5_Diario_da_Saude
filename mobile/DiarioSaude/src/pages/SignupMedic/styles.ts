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

  buttonCadastrar: {
    backgroundColor: "#0124A2",
    marginTop: -40,
    height: 40,
    width: 200,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "center"
  },

  textButton: {
    color: "#fff",
    fontSize: 20
  },

  logo: {
    marginBottom: 30,
    width: 260,
    height: 245
  },

  textContainer: {
    marginBottom: 40
  },

  textInputUsuario: {
    backgroundColor: "#e8e8e8",
    marginBottom: 15,
    width: 300,
    height: 40,
    borderRadius: 8
  },
  upperDivision: {
    backgroundColor: "#0124A2",
    marginBottom: 60,
    width: 400,
    height: 200,
  },
  picture: {
    marginLeft: 110,
    marginTop: 50,
    borderRadius: 100,
    backgroundColor: "#FFFFFF",
    width: 180,
    height: 180,
  },
});

export default styles;
