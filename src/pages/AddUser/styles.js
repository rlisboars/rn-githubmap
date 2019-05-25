import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.5)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  modalView: {
    backgroundColor: "#FFF",
    width: Dimensions.get("window").width - 30,
    borderRadius: 5,
    padding: 20,
    alignItems: "center"
  },
  title: {
    fontSize: 18,
    fontWeight: "bold"
  },
  input: {
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: "#CECECE",
    padding: 10,
    marginTop: 20,
    borderRadius: 3
  },
  actionContainer: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
    marginTop: 20
  },
  actionCancel: {
    backgroundColor: "#CECECE",
    paddingVertical: 15,
    flex: 1,
    alignItems: "center",
    marginRight: 10,
    borderRadius: 5
  },
  actionSave: {
    backgroundColor: "#CECECE",
    paddingVertical: 15,
    flex: 1,
    alignItems: "center",
    marginLeft: 10,
    backgroundColor: "#2eba45",
    borderRadius: 5
  },
  actionText: {
    color: "#FFF",
    fontWeight: "bold"
  },
  errorContainer: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 10,
    marginTop: 20,
    borderRadius: 5
  },
  errorText: {
    color: "#db6969"
  }
});

export default styles;
