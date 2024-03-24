import { StyleSheet, Text, View , TouchableOpacity, Image, TextInput} from 'react-native'
import React , {useState}from 'react'

const SearchScreen = ({navigation}) => {
    const [search, setsearch] = useState('');
    const [danhSach, setDanhSach] = useState([]);
    const [initData, setInitData] = useState([]);

    const filteredProducts = () => initData.filter((product) => {
        if (product.tenSP && product.loaiSP && (product.tenSP.toLowerCase().includes(search.toLowerCase()) || product.loaiSP.toLowerCase().includes(search.toLowerCase()))) {
            return product;
        }
        return false;
    });

    const handleSearch = (value) => {
        setsearch(value);
        if (!value.trim()) {
            setDanhSach(initData)
        } else {
            setDanhSach(filteredProducts())
        }
    }

  return (
    <View>

    <View style={styles.headerBar}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={{ marginLeft: 20, marginTop: 20 }}>
          <Image
            source={require('../img/back1.png')}
            style={{width: 25, height: 25}}
            resizeMode="cover"
          />
        </View>
      </TouchableOpacity>

      <View>
        <Text style={styles.cart}>Tìm kiếm</Text>
      </View>


      


    </View>

    <View style={styles.InputContainer}>

<TouchableOpacity onPress={() => { }}>

    <Image
        source={require('../img/search.png')}
        style={styles.InputIcon}
        resizeMode="cover"
    />
</TouchableOpacity>
<TextInput
    style={styles.search}
    value={search}
    onChangeText={handleSearch}
    placeholder="Tìm kiếm..."
    placeholderTextColor="black"

/>

</View>

  </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
    headerBar: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      cart: {
        fontWeight: 'bold',
        fontSize: 22,
        marginLeft: 140,
        marginTop: 12,
        color: "black",

      },
      InputContainer: {
        margin: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "gray",
        alignItems: 'center',
        flexDirection: 'row',
    },

    InputIcon: {
        marginHorizontal: 20,
    },

    search: {
        flex: 1,
        height: 50,
        fontSize: 14,
        color: 'black'
    },
})