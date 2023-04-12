import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useState } from "react";
import st from "./style";
import { Modal } from "react-native";

const DetailPro = (props) => {
  const [showModalDialog, setshowModalDialog] = useState(false);
  // console.log(props.item);
  return (
    <View>
      <Modal
        visible={showModalDialog}
        transparent={true}
        animationType="fade"
        onRequestClose={() => {
          setshowModalDialog(false);
        }}
      >
        <View style={st.container}>
          <View>
            <Image
              source={{
                uri: props.item.anhsanpham.replace("localhost", "10.0.2.2"),
              }}
              style={st.image}
            />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text>Tên sản phẩm: {props.item.tensanpham}</Text>
            <Text>Giá sản phẩm: {props.item.dongia}</Text>
            <Text>Thể loại: {props.item.theloai.name}</Text>
            <Text>Mô tả: {props.item.mota}</Text>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => {
          setshowModalDialog(true);
        }}
      >
        <Image
          source={{
            uri: props.item.anhsanpham.replace("localhost", "10.0.2.2"),
          }}
          style={st.image}
        />
      </TouchableOpacity>
    </View>
  );
};

export default DetailPro;
