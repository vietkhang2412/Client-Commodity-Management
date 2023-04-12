import { View, FlatList } from "react-native";
import React, { useState } from "react";
import st from "./style";
import ItemProducts from "./itemProduct";
// import AddCars from "./addCars";

const ListProduct = (props) => {
  const [listPro, setlistPro] = useState([]);

  const getlistPro = async () => {
    let url_api = "http://10.0.2.2:3000/api/products";
    try {
      const response = await fetch(url_api);
      const json = await response.json();
      // console.log(">>>>>>Check json: ", json.data);
      //do du lieu vao state
      setlistPro(json.data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getlistPro();
  });

  return (
    <View style={st.container}>
      {
        <FlatList
          data={listPro}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({ item }) => (
            <ItemProducts nav={props.navigation} data={item} />
          )}
        />
      }
      {/* <AddCars /> */}
    </View>
  );
};

export default ListProduct;
