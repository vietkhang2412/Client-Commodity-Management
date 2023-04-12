import {
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import st from "./style";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = (props) => {
  const [Username, setUsername] = useState("");
  const [Passwd, setPasswd] = useState("");

  const image = {
    uri: "https://i.pinimg.com/564x/bf/e6/56/bfe656dde0bdd00d8e35c33273da3d32.jpg",
  };

  const goRegister = () => {
    props.navigation.navigate("Register");
  };

  const goListNews = () => {
    if (Username.length == 0) {
      // console.log("Aaaaaaaaaaaaaaaaa");
      alert("Vui lòng nhập tên tài khoản!!!");
      return;
    }
    if (Passwd.length == 0) {
      alert("Vui lòng nhập mật khẩu!!!");
      return;
    }

    let objLogin = {
      username: Username,
      password: Passwd,
    };

    let url_check_login = "http://10.0.2.2:3000/api/login";
    fetch(url_check_login, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objLogin),
    })
      .then((res) => {
        return res.json();
      })
      .then(async (arr_user) => {
        //không cần thiết check username và password nữa
        //vì trên server đã viết lệnh kiểm tra rồi mới trả về đối tượng có token

        if (arr_user.user == undefined) {
          alert("Sai tài khoản hoặc mật khẩu!!!");
          return;
        }

        let objUser = arr_user.user;
        // if (objUser.username != Username) {
        //   alert("Tên tài khoản không tồn tại!!!");
        //   return;
        // }

        // if (objUser.password != Passwd) {
        //   alert("Sai mật khẩu!!!");
        //   return;
        // }
        // props.setobjU(objUser);

        try {
          await AsyncStorage.setItem("LoginInfo", JSON.stringify(objUser));
          console.log(objUser);
          props.navigation.navigate("ListProduct");
        } catch (e) {
          // saving error
          console.log(e);
        }
      });
  };

  return (
    <ImageBackground style={st.container} source={image} resizeMode="cover">
      {/* header */}
      <View style={st.header}>
        <Text style={st.textHeader}>Login</Text>
      </View>

      {/* body */}
      <View style={st.body}>
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
              value={Username}
              onChangeText={(text) => {
                setUsername(text);
              }}
              placeholder="Enter your username"
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
              value={Passwd}
              onChangeText={(text) => {
                setPasswd(text);
              }}
              secureTextEntry={true}
              placeholder="Enter your password"
              style={st.textUser}
            />
          </View>
        </View>
        <View style={{ alignItems: "flex-end", width: "80%" }}>
          <Text style={{ color: "black" }}>Forgot password</Text>
        </View>

        <View style={st.footer}>
          {/* nút login */}

          <TouchableOpacity onPress={goListNews} style={{ width: "100%" }}>
            <View style={st.btnLogin}>
              <Text style={st.textLogin}>LOGIN</Text>
            </View>
          </TouchableOpacity>

          <Text style={{ marginVertical: 20 }}>or you can</Text>

          {/* Nút create account */}
          <TouchableOpacity onPress={goRegister} style={{ width: "100%" }}>
            <View style={st.btnLogin}>
              <Text style={st.textLogin}>CREATE AN ACCOUNT</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;
