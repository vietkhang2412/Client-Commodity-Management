import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import DetailPro from "./DetailProduct";

let WIDTH = Dimensions.get("window").width;
let HEIGHT = Dimensions.get("window").height;

const ItemProducts = (props) => {
  const { data } = props;

  //hàm xóa sản phẩm
  const deletePro = () => {
    let url_delete_product =
      "http://10.0.2.2:3000/api/delete-product/" + data._id;

    Alert.alert("Thông Báo!!!", "Vui lòng xác nhận xóa sản phẩm!", [
      //chỗ này là nơi để viết các nút trên thanh thông báo
      {
        //nút thứ nhất (OK)
        text: "OK",
        onPress: () => {
          fetch(url_delete_product, {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
            .then((res) => {
              if (res.status == 200) {
                alert("Xóa thành công!!");
              }
            })
            .catch((err) => {
              console.log(err);
            });
        },
      },
      //Nút thứ 2 (Cancel)
      { text: "Cancel", onPress: () => {} },
    ]);
  };
  return (
    <View style={st.container}>
      <DetailPro item={data} />

      <View style={st.content}>
        <Text numberOfLines={2} style={st.textTitle}>
          {data.tensanpham}
        </Text>
        <View style={st.managerPro}>
          <Text>{data.dongia}</Text>
          <View style={{ flexDirection: "row-reverse" }}>
            <TouchableOpacity>
              <Ionicons
                onPress={deletePro}
                name="md-close"
                size={25}
                color="grey"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="md-create" size={25} color="grey" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default ItemProducts;

const st = StyleSheet.create({
  container: {
    width: WIDTH,
    flexDirection: "row",
    marginBottom: 20,
    marginTop: 60,
    paddingHorizontal: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  content: {
    marginLeft: 15,
    width: Dimensions.get("window").width - 100 - 40,
    // justifyContent: "space-around"
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 20,
  },
  managerPro: {
    flexDirection: "row",
    // backgroundColor: "red",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageLogo: {
    width: 40,
    height: 40,
    marginLeft: 0,
    borderRadius: 100,
  },
  textManager: {
    fontWeight: "bold",
    marginLeft: 7,
  },
  txt: {
    fontSize: 10,
    marginLeft: 7,
  },
});
