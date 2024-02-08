import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage';



const FavoritesScreen = ({ navigation }) => {
  const [favorites, setFavorites] = useState([]);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    // Fetch dữ liệu từ API ở đây
    // Ví dụ sử dụng fetch:
    fetch('http://192.168.1.50:3000/products')
      .then((response) => response.json())
      .then((data) => {
        // Kiểm tra xem data có tồn tại và có thuộc tính products không
        if (data) {
          setFavorites(data);
          

        } else {
          console.error('Dữ liệu không hợp lệ:', data);
        }
      })
      .catch((error) => console.error('Lỗi khi fetch dữ liệu:', error));
  }, []);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const favoritesData = await AsyncStorage.getItem('favorites');
      if (favoritesData) {
        const favoritesArray = JSON.parse(favoritesData);
        setFavorites(favoritesArray);
      }
    } catch (error) {
      console.error('Lỗi khi tải danh sách yêu thích:', error);
    }
  };

  const handleLikePress = async (productId) => {
    try {
      // Lấy danh sách sản phẩm đã được yêu thích từ AsyncStorage
      const favoritesData = await AsyncStorage.getItem('favorites');
      let favoritesArray = [];

      if (favoritesData) {
        favoritesArray = JSON.parse(favoritesData);
      }

      // Thêm hoặc xóa productId từ danh sách sản phẩm đã được yêu thích tùy thuộc vào trạng thái trước đó
      if (favoritesArray.includes(productId)) {
        // Nếu đã yêu thích, loại bỏ productId khỏi danh sách
        const updatedFavorites = favoritesArray.filter(item => item !== productId);
        await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        setIsLiked(false);
      } else {
        // Nếu chưa yêu thích, thêm productId vào danh sách
        favoritesArray.push(productId);
        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
        setIsLiked(true);

      }
      setFavorites(favoritesArray);
    } catch (error) {
      console.error('Lỗi khi lưu trạng thái yêu thích:', error);
    }
  };


  return (

    <SafeAreaView style={{ backgroundColor: "black", ...StyleSheet.absoluteFillObject }}>

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
            <Text style={styles.cart}>Favorites</Text>
          </View>



        </View>

      </View>

      <FlatList
        data={favorites}
        // keyExtractor={(item) => (item && item.id) ? item.id.toString() : ''}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
             {item && item.linkAnh && ( 
              <View key={item.id}>
            <View style={styles.container}>
              <Image style={styles.image3}
                source={{ uri: item.linkAnh }} />

              <View style={styles.view}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.text}>{item.tenSP}</Text>


                  <Image
                    source={require('../img/coffee1.png')}

                    style={{ width: 35, height: 35, borderRadius: 10, marginLeft: 80, marginTop: 10 }}
                  />
                  <Image
                    source={require('../img/milk1.png')}

                    style={{ width: 25, height: 30, borderRadius: 10, marginRight: 20, marginLeft: 10, marginTop: 10 }}
                  />
                </View>

                <Text style={{ color: 'gray', marginLeft: 20 }}>With Steamed Milk</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>

                  <Image
                    source={require('../img/rate.png')}

                    style={{ width: 40, height: 30, borderRadius: 10, marginLeft: 20, marginTop: 10 }}
                  />

                  <Text style={{ color: 'white', marginRight: 160, fontSize: 25, fontWeight: 'bold' }}>{item.danhGia}</Text>

                  <Text style={{ color: 'gray', marginRight: 30, fontWeight: 'bold' }}>Medium Roasted</Text>

                </View>


              </View>

              <View style={styles.view1}>
                <Text style={{ color: 'gray', marginLeft: 20, marginTop: 20, fontSize: 20 }}>Description</Text>
                <Text style={{ color: 'white', marginLeft: 20, marginRight: 20, fontSize: 15 }}>{item.moTa}</Text>
              </View>

            </View>
            </View>
             )}
            <TouchableOpacity
              onPress={() => {
                handleLikePress(item.productId); // Gọi hàm saveFavorite với productId của sản phẩm
              }}
              style={styles.heartIcon}>
              {/* Icon trái tim */}
              <Image
                source={isLiked ? require('../img/heart1.png') : require('../img/heart.png')}
                style={{ width: 30, height: 30 }}
              />
            </TouchableOpacity>
          </View>
        )}
      />


    </SafeAreaView>

  )
}

export default FavoritesScreen

const styles = StyleSheet.create({
  container: {
    height: 800,
    color: "black",
    margin: 20,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
  },
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
    marginRight: 110,
    marginLeft: 10,
    borderRadius: 10,
    marginBottom: 5
  },
  image2: {
    width: 40,
    height: 40,
    marginLeft: 110,
    borderRadius: 10,
    marginTop: 10,
  },
  image3: {
    width: 'auto',
    height: 400,
    borderRadius: 10,
  },

  view: {
    height: 150,
    color: "black",
    borderWidth: 1,
    borderRadius: 20,
  },

  view1: {
    height: 250,
    color: "black",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#262B33'
  },

  text: {
    marginLeft: 20,
    marginTop: 20,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  heartIcon: {
    position: 'absolute',
    right: 35,
    bottom: 770,

  },
})