import { StyleSheet, Text, View, TextInput, Image, SafeAreaView,TouchableOpacity,FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { URL } from './HomeScreen';





const CartScreen = ({ navigation, route }) => {

  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState('1');

  const tangQuatity = (quantity) => {
    let tang = parseInt(quantity) + 1;
    setQuantity(tang.toString());
  }

  const giamQuatity = (quantity) => {
    let giam = parseInt(quantity) - 1;
    setQuantity(giam.toString());
  }


  useEffect(() => {
    if (cart.length === 0){
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

  const removeFromCart = (productId) => {
    // Tạm thời để mô phỏng việc loại bỏ sản phẩm khỏi giỏ hàng
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

 


  const CartCard = ({ item }) => {
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeSelection = (size) => {
      setSelectedSize(size);
    };
    return (
      <View>


        <View style={styles.cartCard}>
          <View style={{ flexDirection: 'row', }}>
            <Image source={{ uri: item.linkAnh }} style={{ height: 90, width: 90, borderRadius: 10, }} />
            <View>

              <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'white', marginLeft: 20 }}>{item.tenSP}</Text>
              <Text style={{ fontSize: 13, color: 'gray', marginLeft: 20 }}>
                With Milk
              </Text>
            </View>
          </View>

          <View>

            {item.giaSP && item.giaSP.map(option => {
              return <Text
                key={option.giaSP}
                onPress={() => handleSizeSelection(option)}

              >
                <View style={{ flexDirection: 'row',}}>
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
                    <TouchableOpacity onPress={() =>{giamQuatity(quantity)}}>
                      <Text style={styles.name}>-</Text>
                    </TouchableOpacity>

                    <TextInput style={styles.name1} keyboardType='numeric' value= {quantity}  onChangeText={(value) => setQuantity(value)} />


                    <TouchableOpacity onPress={() => {tangQuatity(quantity)}}>
                      <Text style={styles.name}>+</Text>
                    </TouchableOpacity>
                  </View>
               

              </Text>

            })}

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
            <Text style={styles.cart}>Cart</Text>
          </View>

        </View>

      </View>

      <FlatList 
        data={cart}
        renderItem={({ item }) => <CartCard item={item} />}
       
      />

      <View style={{ flexDirection: 'row', position: 'absolute', top: 680, backgroundColor: 'black', width: '100%', height: 70, margin: 20 }}>
        <View>
          <Text style={{ color: 'white', marginLeft: 10, marginTop: 10, fontSize: 15 }}>Total Price</Text>
          <Text style={{ color: 'white', marginLeft: 10, fontSize: 25, fontWeight: 'bold' }}>$ 10.40</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("PaymentScreen")}
          style={{ backgroundColor: "orange", width: '50%', justifyContent: 'center', alignItems: 'center', marginLeft: 80, margin: 10, borderRadius: 15 }}>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Pay</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}



export default CartScreen

const styles = StyleSheet.create({
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cart: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
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