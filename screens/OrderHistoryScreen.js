import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, FlatList, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { URL } from './HomeScreen';

const OrderHistoryScreen = ({ navigation, route }) => {

  const [cart, setCart] = useState([]);


  useEffect(() => {
    if (cart.length === 0) {
      // Fetch dữ liệu từ API ở đây
      // Ví dụ sử dụng fetch:
      fetch(`${URL}/products`)
        .then((response) => response.json())
        .then((data) => {
          // Kiểm tra xem data có tồn tại và có thuộc tính products không
          if (data) {
            setCart(data);

          } else {
            console.error('Dữ liệu không hợp lệ:', data);
          }
        })
        .catch((error) => console.error('Lỗi khi fetch dữ liệu:', error));
    }
  }, [cart]);

  const CartCard = ({ item }) => {
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeSelection = (size) => {
      setSelectedSize(size);
    };
    return (
      <View>

        <View>
          <View style = {{flexDirection: 'row', justifyContent: 'space-between', margin: 20}}>
            <View>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Order Date</Text>
            <Text style={{ color: 'white', fontSize: 16, top: 5, }}>20 March 16:20</Text>
            </View>
            <View>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Total Amount</Text>
            <Text style={{ color: 'orange',  fontSize: 16, top: 5, left: 50 }}>$ 74.40</Text>

            </View>
          </View>
         
          <View style={styles.cartCard}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Image source={{ uri: item.linkAnh }} style={{ height: 90, width: 90, borderRadius: 10, }} />
              <View>

                <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'white', marginLeft: 5 }}>{item.tenSP}</Text>
                <Text style={{ fontSize: 14, color: 'gray', marginLeft: 5 }}>
                  With Milk
                </Text>
              </View>
              <Text style={{ color: 'orange', fontWeight: 'bold', fontSize: 25, bottom: 10, marginLeft: 10, top: 15 }}>$</Text>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25, bottom: 10, marginLeft: 5, top: 15 }}>8.40</Text>
            </View>

            <View>

              {item.giaSP && item.giaSP.map(option => {
                return <Text
                  key={option.giaSP}
                  onPress={() => handleSizeSelection(option)}

                >
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{
                      color: 'white',
                      textAlign: 'center',
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingVertical: 10,
                      paddingHorizontal: 20,
                      borderRadius: 10,
                      marginTop: 10,
                      fontSize: 15,
                      fontWeight: 'bold',
                      backgroundColor: 'black',
                    }}
                    >
                      {option.size}</Text>
                    <Text style={{ color: 'white', marginTop: 15, marginHorizontal: 20, fontWeight: 'bold', fontSize: 20 }}> $ {option.price}</Text>
                  </View>

                  <View style={styles.click1}>
                    <Text style={{ color: 'orange', fontWeight: 'bold', fontSize: 19, bottom: 10, marginLeft: 40 }}>X</Text>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, bottom: 10 }}>2</Text>
                    <Text style={{ color: 'orange', fontWeight: 'bold', fontSize: 19, bottom: 10, marginLeft: 100 }}>8.40</Text>
                  </View>


                </Text>

              })}

            </View>
          </View>
        </View>
      </View>

    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: 'black' }}>

      <View>

        <View style={styles.headerBar}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <View style={{ marginLeft: 20, marginTop: 20 }}>
              <Image
                source={require('../img/menu.png')}
                style={styles.image1}
                resizeMode="cover"
              />
            </View>
          </TouchableOpacity>

          <View>
            <Text style={styles.cart}>Order History</Text>
          </View>

        </View>

      </View>

      <FlatList
        data={cart}
        renderItem={({ item }) => <CartCard item={item} />}
      />

    </SafeAreaView>
  )
}

export default OrderHistoryScreen

const styles = StyleSheet.create({
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cart: {
    fontWeight: 'bold',
    fontSize: 22,
    color: "white",
  },
  image1: {
    width: 40,
    height: 40,
    marginRight: 120,
    marginLeft: 10,
    borderRadius: 10,
    marginBottom: 5
  },
  image2: {
    width: 40,
    height: 40,
    marginLeft: 130,
    borderRadius: 10,
    marginTop: 10,
  },
  name: {
    color: "white",
    paddingHorizontal: 10,
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
    borderWidth: 1,
    backgroundColor: "orange",
    borderRadius: 5,

  },
  name1: {
    color: "white",
    marginHorizontal: 10,
    textAlign: 'center',
    borderWidth: 1,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'black',
    borderColor: "orange",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 0,

  },

  click1: {
    flexDirection: 'row',

  },

  cartCard: {
    height: 270,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    padding: 15,
    backgroundColor: '#262B33',
  },
})