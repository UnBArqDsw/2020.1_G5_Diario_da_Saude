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
    marginTop: 16,
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
    marginBottom: 40,
    marginTop: 8,
    alignItems: "center"
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
    height: 200
  },
  picture: {
    marginLeft: 110,
    marginTop: 50,
    borderRadius: 100,
    backgroundColor: "#FFFFFF",
    width: 180,
    height: 180
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalView: {
    marginTop: 0,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  openButton: {
    backgroundColor: "#0124A2",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom: 10,
    width: 200
  },
  darkBackground: {
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  }
});

export default styles;
