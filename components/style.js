import { StyleSheet, Dimensions } from "react-native";

const st = StyleSheet.create({
  containerDetail: {
    width: Dimensions.get("window").width,
    flexDirection: "row",
    marginBottom: 20,
    marginTop: 60,
    paddingHorizontal: 10,
  },
  container: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  textinput: {
    backgroundColor: "#fff",
    width: "80%",
    height: 44,
    borderWidth: 1,
    borderColor: "#00b0ff",
    borderRadius: 20,
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  add: {
    width: 100,
    height: 40,
    backgroundColor: "#40c4ff",
    borderRadius: 20,
    textAlign: "center",
    paddingVertical: 10,
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 30,
  },
  itemcss: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#e3f2fd",
    width: 350,
    minHeight: 80,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 20,
    justifyContent: "space-between",
  },
  textItem: {
    fontSize: 15,
    fontWeight: "bold",
    paddingVertical: 10,
    paddingLeft: 17,
  },
  m_dialog: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 40,
  },
  username1: {
    width: "80%",
    height: 60,
    marginBottom: 30,
  },
  iconandtext: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    flexDirection: "row",
    height: 40,
    marginLeft: 15,
  },
  textUser: {
    width: "85%",
  },
  icondel: {
    marginRight: 20,
    flexDirection: "row",
  },
  imageAdd: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 75,
    alignItems: "center",
  },
  imageShow: {
    height: "98%",
    width: 70,
    // backgroundColor: 'yellow',
    borderRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
});

export default st;
