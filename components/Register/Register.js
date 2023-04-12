import {
  View,
  Text,
  TextInput,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import st from "./style";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

const Register = (props) => {
  const [image, setimage] = useState(null);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");

  const goLogin = () => {
    props.navigation.goBack();
  };
  let url_api_user = "http://10.0.2.2:3000/api/reg";

  const addUser = () => {
    let objUser = {
      username: username,
      password: password,
      fullname: fullname,
      // image: image,
      email: email,
      role: "User",
    };

    fetch(url_api_user, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objUser),
    })
      .then((res) => {
        console.log(res);
        if (res.status == 201) {
          alert("Đăng kí thành công!!!");
          props.navigation.goBack();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });
    if (!result.canceled) {
      let _uri = result.assets[0].uri;
      let file_ext = _uri.substring(_uri.lastIndexOf(".") + 1);
      FileSystem.readAsStringAsync(result.assets[0].uri, {
        encoding: "base64",
      }).then((res) => {
        setimage("data:image/" + file_ext + ";base64," + res);
        console.log(image);
      });
    }
  };
  return (
    <ImageBackground
      style={st.container}
      source={{
        uri: "https://i.pinimg.com/564x/89/f7/da/89f7dab4089cc146c0954dbb04b2ec3f.jpg",
      }}
      resizeMode="cover"
    >
      {/* header */}
      <View style={st.header}>
        <TouchableOpacity onPress={goLogin} style={st.iconBack}>
          <Ionicons name="md-arrow-back" size={30} color="black" />
        </TouchableOpacity>

        <Text style={st.textHeader}>Register</Text>
      </View>

      {/* body */}
      <View style={st.body}>
        {/* Email-address */}
        <View style={st.username1}>
          <Text style={{ color: "black", fontSize: 16, marginLeft: 7 }}>
            Email
          </Text>
          <View style={st.iconandtext}>
            <Ionicons
              name="md-mail"
              size={20}
              color="black"
              style={{ paddingVertical: 10 }}
            />
            <TextInput
              onChangeText={(txt) => {
                setemail(txt);
              }}
              placeholder="Enter your email-address"
              style={st.textUser}
            />
          </View>
        </View>

        {/* Fullname */}
        <View style={st.username1}>
          <Text style={{ color: "black", fontSize: 16, marginLeft: 7 }}>
            Fullname
          </Text>
          <View style={st.iconandtext}>
            <Ionicons
              name="ios-person-outline"
              size={20}
              color="black"
              style={{ paddingVertical: 10 }}
            />
            <TextInput
              onChangeText={(txt) => {
                setfullname(txt);
              }}
              placeholder="Enter your fullname"
              style={st.textUser}
            />
          </View>
        </View>

        {/* username */}
        <View style={st.username1}>
          <Text style={{ color: "black", fontSize: 16, marginLeft: 7 }}>
            Username
          </Text>
          <View style={st.iconandtext}>
            <Ionicons
              name="md-person"
              size={20}
              color="black"
              style={{ paddingVertical: 10 }}
            />
            <TextInput
              onChangeText={(txt) => {
                setusername(txt);
              }}
              placeholder="Enter your name"
              style={st.textUser}
            />
          </View>
        </View>

        {/* password */}
        <View style={st.username1}>
          <Text style={{ color: "black", fontSize: 16, marginLeft: 7 }}>
            Password
          </Text>
          <View style={st.iconandtext}>
            <Ionicons
              name="md-key"
              size={20}
              color="black"
              style={{ paddingVertical: 10 }}
            />
            <TextInput
              onChangeText={(txt) => {
                setpassword(txt);
              }}
              secureTextEntry={true}
              placeholder="Enter your password"
              style={st.textUser}
            />
          </View>
        </View>

        {/* nút register */}
        <View style={st.footer}>
          <TouchableOpacity onPress={addUser} style={{ width: "100%" }}>
            {/* <TouchableOpacity style={{ width: "100%" }}> */}
            <View style={st.btnLogin}>
              <Text style={st.textLogin}>Register</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Register;
