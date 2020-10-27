import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  darkBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },

  buttonsContainer: {
    justifyContent: "space-between"
  },

  buttonEntrar: {
    backgroundColor: "#0124A2",
    marginBottom: 60,
    height: 40,
    width: 300,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "center"
  },

  buttonCadastrar: {
    backgroundColor: "#0124A2",
    height: 40,
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
    marginBottom: 80,
    width: 260,
    height: 245
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
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
  openButtonMedico: {
    backgroundColor: "#0124A2",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom: 10,
    width: 200
  },
  openButtonPaciente: {
    backgroundColor: "#0124A2",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 200
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20
  }
});

export default styles;
