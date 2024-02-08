import { StyleSheet, Text, View, TextInput, Image, Picker, SafeAreaView, ScrollView, TouchableOpacity, Button,FlatList} from 'react-native'
import React, {useEffect, useState} from 'react'
import { URL } from './HomeScreen';

import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './HomeScreen';



const CartScreen = ({navigation}) => {

  const [cart, setCart] = useState([]);

  useEffect(() => {
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
  }, []);


  // return (

    // <SafeAreaView style={{ backgroundColor: "black", ...StyleSheet.absoluteFillObject }}>



     

    //   <ScrollView>


    //     <View style={styles.donHang1}>
    //       <View style={{ flexDirection: 'column' }}>
    //         <Image style={styles.image3}
    //           source={{ uri: 'https://www.acouplecooks.com/wp-content/uploads/2021/12/Mocha-Cappuccino-004.jpg' }} />

    //         <TouchableOpacity
    //           onPress={() => { }}
    //           style={styles.khungButton}
    //         >
    //           <Text style={styles.size}>S</Text>
    //         </TouchableOpacity>

    //         <TouchableOpacity
    //           onPress={() => { }}
    //           style={styles.khungButton}
    //         >
    //           <Text style={styles.size}>M</Text>
    //         </TouchableOpacity>


    //         <TouchableOpacity
    //           onPress={() => { }}
    //           style={styles.khungButton}
    //         >
    //           <Text style={styles.size}>L</Text>
    //         </TouchableOpacity>

    //       </View>


    //       <View style={{ flexDirection: 'column', marginLeft: 20 }}>
    //         <Text style={styles.noiDung}>Cappuccino</Text>
    //         <Text style={styles.noiDung1}>With Steamed Milk</Text>

    //         <View style={{ flexDirection: 'row' }}>
    //           <View>
    //             <Text style={styles.textPrice}>$ 45000</Text>
    //             <Text style={styles.textPrice1}>$ 70000</Text>
    //             <Text style={styles.textPrice1}>$ 90000</Text>
    //           </View>
    //           <View>
    //             <View style={styles.click}>

    //               <TouchableOpacity onPress={() => { }}>
    //                 <Text style={styles.name}>-</Text>
    //               </TouchableOpacity>
        
    //               <TextInput style={styles.name1}>1</TextInput>
                                 

    //               <TouchableOpacity onPress={() => { }}>
    //                 <Text style={styles.name}>+</Text>
    //               </TouchableOpacity>
    //             </View>

    //             <View style={styles.click2}>
    //             <TouchableOpacity onPress={() => { }}>
    //                 <Text style={styles.name}>-</Text>
    //               </TouchableOpacity>
        
    //               <TextInput style={styles.name1}>1</TextInput>
                                 

    //               <TouchableOpacity onPress={() => { }}>
    //                 <Text style={styles.name}>+</Text>
    //               </TouchableOpacity>
    //             </View>

    //             <View style={styles.click2}>
    //             <TouchableOpacity onPress={() => { }}>
    //                 <Text style={styles.name}>-</Text>
    //               </TouchableOpacity>
        
    //               <TextInput style={styles.name1}>1</TextInput>
                                 

    //               <TouchableOpacity onPress={() => { }}>
    //                 <Text style={styles.name}>+</Text>
    //               </TouchableOpacity>
    //             </View>
    //           </View>
    //         </View>

    //       </View>
    //       <View>

    //       </View>
    //     </View>

    //     <View style={styles.donHang}>
    //       <Image style={styles.image}
    //         source={{ uri: 'https://cdn.tgdd.vn/Files/2019/08/17/1188646/tim-hieu-11-loai-ca-phe-pho-bien-nhat-o-viet-nam-hien-nay-202008121541144416.jpg' }} />
    //       <View>
    //         <Text style={styles.noiDung}>Coffee Beans</Text>

    //         <View style={styles.gm}>
    //           <Text style={styles.gm1}>M</Text>
    //           <Text style={styles.gm2}>$ 70000</Text>
    //         </View>
    //         <View>
    //           <View style={styles.click1}>
    //           <TouchableOpacity onPress={() => { }}>
    //                 <Text style={styles.name}>-</Text>
    //               </TouchableOpacity>
        
    //               <TextInput style={styles.name1}>1</TextInput>
                                 

    //               <TouchableOpacity onPress={() => { }}>
    //                 <Text style={styles.name}>+</Text>
    //               </TouchableOpacity>
    //           </View>

    //         </View>
    //       </View>

    //     </View>



    //     <View style={styles.donHang}>
    //       <Image style={styles.image}
    //         source={{ uri: 'https://www.acouplecooks.com/wp-content/uploads/2021/12/Mocha-Cappuccino-004.jpg' }} />
    //       <View>
    //         <Text style={styles.noiDung}>Cappuccino</Text>
    //         <Text style={styles.noiDung1}>With Steamed Milk</Text>
    //         <View style={styles.gm}>
    //           <Text style={styles.gm1}>S</Text>
    //           <Text style={styles.gm2}>$ 45000</Text>
    //         </View>
    //         <View>
    //           <View style={styles.click1}>
    //           <TouchableOpacity onPress={() => { }}>
    //                 <Text style={styles.name}>-</Text>
    //               </TouchableOpacity>
        
    //               <TextInput style={styles.name1}>1</TextInput>
                                 

    //               <TouchableOpacity onPress={() => { }}>
    //                 <Text style={styles.name}>+</Text>
    //               </TouchableOpacity>
    //           </View>

    //         </View>
    //       </View>
          

    //     </View>

      
        
    //   </ScrollView>

    //   <View style = {{flexDirection: 'row', position: 'absolute', top: 700, backgroundColor: 'black', width: '100%', height: 70}}>
    //     <View>
    //     <Text style = {{color: 'white', marginLeft: 10,marginTop: 10, fontSize: 15}}>Total Price</Text>
    //     <Text style = {{color: 'white', marginLeft: 10, fontSize: 25, fontWeight: 'bold'}}>$ 10.40</Text>
    //   </View>
    //   <TouchableOpacity onPress={() => navigation.navigate("PaymentScreen")}
    //   style = {{backgroundColor: "orange", width: '50%',justifyContent: 'center', alignItems: 'center', marginLeft: 80, margin: 10, borderRadius: 15}}>
    //       <Text style = {{color: 'white', textAlign: 'center', fontSize: 20,fontWeight: 'bold'}}>Pay</Text>
    //   </TouchableOpacity>
    //   </View>
    // </SafeAreaView>
    
    const CartCard = ({item}) => {
      return (
        <View style={styles.cartCard}>
          <Image source={{ uri: item.linkAnh }} style={{height: 90, width: 90, borderRadius: 10, }} />
          <View
            style={{
              height: 100,
              marginLeft: 15,
              paddingVertical: 5,
              flex: 1,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16, color: 'white',}}>{item.tenSP}</Text>
            <Text style={{fontSize: 13, color: 'gray'}}>
              With Milk
            </Text>
            <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white', marginTop: 20}}>đ {item.giaSP}</Text>
          </View>
          <View style={{marginRight: 20, alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: 'white', marginBottom: 10}}>1</Text>
            <View style={styles.actionBtn}>
              <TouchableOpacity onPress={() => {}}>
              <Image source={require('../img/minus.png')} style={{marginRight: 15, top: 5}}/>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {}}>
              <Image source={require('../img/plus.png')} style={{ top: 5}}/>
              </TouchableOpacity>
             
              
            </View>
          </View>
        </View>
      );
    };
    return (
      <SafeAreaView style={{backgroundColor: 'black'}}>

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
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 80}}
          data={cart}
          renderItem={({item}) => <CartCard item={item} />}
          ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
          ListEmptyComponent={() => (
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 15,
                }}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  Total Price
                </Text>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}></Text>
              </View>
              <View style={{marginHorizontal: 30}}>
                <Button title="CHECKOUT" />
              </View>
            </View>
          )}
        />
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
  // image3: {
  //   width: 100,
  //   height: 100,
  //   borderRadius: 10
  // },

  // textPrice: {
  //   color: 'white',
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   marginTop: 65,

  // },

  // textPrice1: {
  //   color: 'white',
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   marginTop: 40,

  // },
  // gm: {
  //   flexDirection: 'row',
  //   margin: 10,
  //   alignItems: 'center'
  // },
  // gm1: {
  //   color: 'white',
  //   textAlign: 'center',
  //   fontSize: 15,
  //   fontWeight: 'bold',
  //   padding: 10,
  //   borderWidth: 1,
  //   marginRight: 10,
  //   backgroundColor: 'black',
  //   borderRadius: 10,
  //   width: 70,
  // },
  // gm2: {
  //   fontSize: 20,
  //   color: 'white',
  //   marginLeft: 20,
  //   fontWeight: 'bold'
  // },
  // gm3: {
  //   color: "gray",
  //   padding: 10,
  //   marginTop: 5,
  //   borderWidth: 1,
  //   borderColor: "gray",
  //   borderRadius: 10,
  // },
  // gm4: {
  //   fontSize: 20,
  //   color: 'gray',
  //   marginLeft: 20,
  //   fontWeight: 'bold'

  // },
  // name: {
  //   color: "white",
  //   paddingHorizontal: 10,
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   margin: 10,
  //   borderWidth: 1,
  //   backgroundColor: "orange",
  //   borderRadius: 5,
  // },
  // name1: {
  //   color: "white",
  //   margin: 10,
  //   padding: 0.5,
  //   textAlign: 'center',
  //   width: '20%',
  //   borderWidth: 1,
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   backgroundColor: 'black',
  //   borderColor: "orange",
  //   borderRadius: 5,
    

  // },
  // click: {
  //   marginLeft: 25,
  //   marginTop: 55,
  //   flexDirection: 'row',
  // },
  // click1: {
  //   flexDirection: 'row',

  // },

  // click2: {
  //   flexDirection: 'row',
  //   marginLeft: 25,
  //   marginTop: 20,
  // },
  // donHang: {
  //   marginTop: 20,
  //   marginLeft: 15,
  //   marginRight: 15,
  //   color: "gray",
  //   display: 'flex',
  //   flexDirection: 'row',
  //   paddingVertical: 10,
  //   paddingHorizontal: 20,
  //   borderWidth: 1,
  //   backgroundColor: '#262B33',
  //   borderRadius: 10,
  // },
  // donHang1: {
  //   marginTop: 20,
  //   flexDirection: 'row',
  //   paddingVertical: 10,
  //   paddingHorizontal: 15,
  //   borderWidth: 1,
  //   marginHorizontal: 15,
  //   backgroundColor: '#262B33',
  //   borderRadius: 10
  // },
  // noiDung: {
  //   fontSize: 25,
  //   color: 'white',
  //   fontWeight: 'bold'
  // },
  // noiDung1: {
  //   color: 'white'
  // },
  // item: {
  //   alignItems: 'center',
  // },
  // image: {
  //   width: 120,
  //   height: 140,
  //   marginRight: 20,
  //   borderRadius: 10
  // },
  // text: {
  //   marginTop: 10,
  //   fontSize: 14,
  //   fontWeight: 'normal',
  //   color: 'gray'
  // },

  // size: {
  //   color: "white",
  //   textAlign: 'center',
  //   fontSize: 20,
  //   fontWeight: 'bold'

  // },

  // khungButton: {
  //   backgroundColor: "black",
  //   borderWidth: 1,
  //   borderRadius: 15,
  //   padding: 8,
  //   margin: 10
  // },


  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 150,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#262B33',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: 'orange',
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },

})