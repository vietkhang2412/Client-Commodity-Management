import { StyleSheet } from "react-native";

const st = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    // justifyContent: 'center',
    alignItems: "center",
    paddingVertical: 50,
  },
  header: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  textHeader: {
    fontSize: 40,
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  body: {
    width: "100%",
    flex: 6,
    alignItems: "center",
  },
  username1: {
    width: "80%",
    height: 60,
    marginBottom: 25,
  },
  iconandtext: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    flexDirection: "row",
    height: 40,
    justifyContent: "space-around",
  },
  textUser: {
    width: "85%",
  },
  footer: {
    marginTop: 30,
    width: "100%",
    alignItems: "center",
  },
  btnLogin: {
    backgroundColor: "#fbe9e7",
    width: "70%",
    height: 50,
    marginHorizontal: "15%",
    borderRadius: 10,
    borderWidth: 2,
  },
  textLogin: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    paddingVertical: 10,
  },
});

export default st;
