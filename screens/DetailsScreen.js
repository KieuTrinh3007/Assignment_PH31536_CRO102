import { StyleSheet, Text, View, StatusBar, ImageBackground, Image, TouchableOpacity, Pressable } from 'react-native'
import React, {useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { produce } from 'immer';


const DetailsScreen = ({navigation, route}) => {

  const {image, title, price, rate, description} = route.params;

   // State để lưu trữ kích thước hiện tại của sản phẩm (S, M, L)
   const [size, setSize] = useState('S');

   // yêu thích

   const [isLiked, setIsLiked] = useState(false); 

   useEffect(() => {
    // Kiểm tra xem sản phẩm có trong danh sách yêu thích hay không
    checkIsLiked();
  }, []);

  const checkIsLiked = async () => {
    try {
      const favoritesData = await AsyncStorage.getItem('favorites');
      if (favoritesData) {
        const favorites = JSON.parse(favoritesData);
        setIsLiked(favorites.includes(route.params.id));
      }
    } catch (error) {
      console.error('Lỗi khi kiểm tra trạng thái yêu thích:', error);
    }
  };
  
  const handleLikePress = async (productId) => {
    try {
      // Lấy danh sách sản phẩm đã được yêu thích từ AsyncStorage
      const favoritesData = await AsyncStorage.getItem('favorites');
      let favorites = [];
      
      if (favoritesData) {
        favorites = JSON.parse(favoritesData);
      }
  
      // Thêm hoặc xóa sản phẩm khỏi danh sách yêu thích tùy thuộc vào trạng thái trước đó
      const isProductLiked = favorites.includes(productId);
      // if (isProductLiked) {
      //   // Nếu sản phẩm đã yêu thích, loại bỏ nó khỏi danh sách
      //   const updatedFavorites = favorites.filter(item => item !== route.params.id);
      //   await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      //   setIsLiked(false); 
      // } else {
      //   // Nếu sản phẩm chưa yêu thích, thêm nó vào danh sách
      //   favorites.push(productId);
      //   await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
      //   setIsLiked(true); 
      // }
      const updatedFavorites = produce(favorites, (draftFavorites) => {
        if (isProductLiked) {
            return draftFavorites.filter(item => item !== productId);
        } else {
            draftFavorites.push(productId);
        }
    });

    await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsLiked(!isProductLiked);
     
    } catch (error) {
      console.error('Lỗi khi lưu trạng thái yêu thích:', error);
    }
  };
  

   const [currentPrice, setCurrentPrice] = useState(price);

   // Hàm để cập nhật kích thước khi người dùng chọn
   const handleSizeSelection = (selectedSize) => {
     setSize(selectedSize);
     console.log(price);
     if (price && Array.isArray(price)) {
     // Cập nhật giá tương ứng với kích thước được chọn
     
     const selectedPrice = price.find(item => item.size === selectedSize);
    //  setCurrentPrice(selectedPrice ? selectedPrice.price : 'N/A');
    if (selectedPrice) {
      setCurrentPrice(selectedPrice.price);
    } else {
      // Nếu không tìm thấy giá cho kích thước đã chọn, đặt giá hiện tại là 'N/A'
      setCurrentPrice('N/A');
    }
  } else {
    // Nếu price không phải là một mảng, in ra một thông báo hoặc xử lý theo cách phù hợp
    setCurrentPrice(price);
  }
   };

    // Hàm để lấy giá của sản phẩm dựa trên kích thước hiện tại
  // const getPriceForSize = () => {
  //   // Lấy giá tương ứng với kích thước hiện tại từ mảng giá sản phẩm
  //   const selectedPrice = price.find(item => item.size === size);
  //   // Kiểm tra nếu tồn tại giá cho kích thước này thì trả về giá đó, ngược lại trả về 'N/A'
  //   return selectedPrice ? selectedPrice.price : 'N/A';
  // };
  
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="rgba(0,0,0,0)"
      />
      <ImageBackground
        source={{ uri: image }}
        style={styles.headerImage}
      >

        <View style={styles.body}>
          <View style={{ flexDirection: 'row'}}>

            <View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: 'white',fontSize: 20, fontWeight: 'bold' , marginLeft: 20, marginTop: 20}}>{title}</Text>


                <Image
                  source={require('../img/coffee1.png')}

                  style={{ width: 35, height: 35, borderRadius: 10, marginLeft: 90, marginTop: 10,}}
                />
                <Image
                  source={require('../img/milk1.png')}

                  style={{ width: 25, height: 30, borderRadius: 10, marginTop: 10,marginLeft: 20, }}
                />
              </View>

              <Text style={{ color: 'gray', marginLeft: 20 }}>With Steamed Milk</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>

                <Image
                  source={require('../img/rate.png')}

                  style={{ width: 40, height: 30, borderRadius: 10, marginLeft: 20, marginTop: 10 }}
                />

                <Text style={{ color: 'white', marginRight: 160, fontSize: 25, fontWeight: 'bold' }}>{rate}</Text>

                <Text style={{ color: 'gray', fontWeight: 'bold' }}>Medium Roasted</Text>

              </View>
            </View>
          </View>

          <View style={{ backgroundColor: 'black', padding: 20 }}>

            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'normal' }}>Description</Text>
            <Text style={styles.tripInfo}>{description}</Text>
              <Text style={{ color: 'white', fontSize: 16, fontWeight: 'normal', marginTop: 15 }}>Size</Text>
              <View style = {{flexDirection: 'row', justifyContent: 'space-around'}}>
                
                <TouchableOpacity
                onPress={() => handleSizeSelection('S')}
                style = {{padding: 7, width: '20%', borderRadius: 10, marginTop: 10, borderColor: size === 'S' ? 'orange' : 'gray' , borderWidth: 2}}
                >
                  <Text style = {{color: 'white', textAlign: 'center'}}>S</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => handleSizeSelection('M')}
                style = {{padding: 7, width: '20%', borderRadius: 10, marginTop: 10, borderColor: size === 'M' ? 'orange' : 'gray' , borderWidth: 2}}
                >
                  <Text style = {{color: 'white', textAlign: 'center'}}>M</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() =>handleSizeSelection('L')}
                style = {{padding: 7, width: '20%', borderRadius: 10, marginTop: 10, borderColor: size === 'L' ? 'orange' : 'gray', borderWidth: 2}}
                >
                  <Text style = {{color: 'white', textAlign: 'center'}}>L</Text>
                </TouchableOpacity>
              </View>
          </View>
          
          <View style={styles.footer}>

            <View style={{ flexDirection: 'row' }}>

              <View style={styles.price}>
                <Text style={{ color: 'white' }}>Price</Text>
                <Text style={styles.priceText}>{currentPrice}</Text>
              </View>

              <TouchableOpacity style={styles.bookButton}>
                <Text style={styles.buttonText}>Add to Card</Text>
              </TouchableOpacity>
            </View>

            
            <TouchableOpacity 
            onPress={() => handleLikePress(route.params.id)}
            style={styles.heartIcon}>
              {/* Icon trái tim */}
              <Image
                 source={isLiked ? require('../img/heart1.png') : require('../img/heart.png')}
                style={{ width: 30, height: 30 }}
              />
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={styles.back}>
  
              <Image
                source={require('../img/back1.png')}
                style={{ width: 20, height: 20}}
              />
            </TouchableOpacity>
          </View>
        </View>


      </ImageBackground>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    flex: 7,

  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',

  },

  headerText: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },

  body: {
    flex: 3,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.6)",
    marginTop: 370,



  },
  tripInfo: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: 'normal',
    color: 'white',
    marginTop: 10,
    height: 90,


  },
  footer: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'black',
    paddingVertical: 10,

  },
  price: {
    flex: 2,
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
  },
  bookButton: {
    flex: 3,
    backgroundColor: 'orange',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 7,
    borderRadius: 15,


  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',

  },
  heartIcon: {
    position: 'absolute',
    right: 16,
    bottom: 750,

  },
  back: {
    position: 'absolute',
    left: 16,
    bottom: 760,

  },
})