import React, { useState, useEffect } from 'react';
import { ImageBackground } from 'react-native';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ScrollView, TextInput, ToastAndroid } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const URL = 'http://10.0.2.2:3000';


const HomeScreen = ({ navigation }) => {

    const [search, setsearch] = useState('');
    // const [selectedCategory, setSelectedCategory] = useState('');
    const [section, setSection] = useState([{ title: "All", id: 1, uriIcon: require('../img/cafe.png'), hide: true }, { title: "Cây trồng", id: 2, uriIcon: require('../img/cappuccino.png'), hide: false }, { title: "Chậu cây trồng", id: 3, uriIcon: require('../img/americano.png'), hide: false }, { title: "Phụ kiện chăm sóc", id: 4, uriIcon: require('../img/beans.png'), hide: false }])
    const [danhSach, setDanhSach] = useState([]);
    const [initData, setInitData] = useState([]);



    useEffect(() => {
        // Fetch dữ liệu từ API ở đây
        // Ví dụ sử dụng fetch:
        fetch(`${URL}/products`)
            .then((response) => response.json())
            .then((data) => {
                // Kiểm tra xem data có tồn tại và có thuộc tính products không
                if (data) {
                    setDanhSach(data);
                    setInitData(data);
                } else {
                    console.error('Dữ liệu không hợp lệ:', data);
                }
            })
            .catch((error) => console.error('Lỗi khi fetch dữ liệu:', error));
    }, []);



    const handleSection = (index) => {
        if (index === 0) {
            setSection(section.map((item, position) => ({ ...item, hide: position === index ? true : false })))
        } else {
            const sectionNew = section.map(item => ({ ...item, hide: true }))
            sectionNew[index].hide = false
            setSection(sectionNew);
        }


    };

    

    return (
        <SafeAreaView style={{ backgroundColor: "white", ...StyleSheet.absoluteFillObject }}>

            
        <View style={styles.headerBar}>

                <ImageBackground
                    source={require('../img/tree.png')}
                    style={{ width: '100%', height: 350 }}
                >
                    
                       
                    <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>

                        <View style={styles.ImageContainer}>


                            <Image
                                source={require('../img/giohang.png')}
                                style={{ width: 50, height: 50, }}
                                resizeMode="cover"
                            />

                        </View>
                    </TouchableOpacity>

                   

                    <Text style={{ color: "black", fontSize: 28, marginLeft: 20 }}>Plan - toả sáng {'\n'}không gian nhà bạn</Text>
                    
                </ImageBackground>

            </View>


<ScrollView>
        
                {section.filter(item => !item.hide)
                    .map((element) => {
                        const list = danhSach.filter(obj => obj.loaiSP === element.title);
                        return !list.length ? null : (


                            <View key={element.id}>

                                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, marginLeft: 20 }}>{element.title}</Text>

                                <FlatList
                                    style = {{marginHorizontal: 10}}
                                    data={list}
                                    keyExtractor={(item) => parseInt(item.id, 10).toString()}
                                    numColumns={2}
                                    renderItem={({ item, index }) => index > 3 ? null: (
                                        <View style={styles.productItem}>
                                            <TouchableOpacity

                                                onPress={() => {
                                                    const priceS = item.giaSP.find(price => price.size === 'Nhỏ');
                                                    const price = priceS ? priceS.price + ' ' + priceS.currency : 'N/A'

                                                    navigation.navigate("DetailsScreen", { item, id: item.id, giaSP: item.giaSP, loaiSP: item.loaiSP, image: item.linkAnh, title: item.tenSP, price: price, gia: item.giaSP, origin: item.xuatXu, classify: item.phanLoai })
                                                }}
                                            >
                                                <Image
                                                    style={{ width: 180, height: 150, borderRadius: 7 }}
                                                    source={{ uri: item.linkAnh }} />
                                           

                                            <View style={styles.ngang}>
                                                <View style={{ width: 115, marginLeft: 5 }} >
                                                    <Text style={{ color: 'black', fontSize: 17, }}>{item.tenSP}</Text>
                                                    <Text>{item.phanLoai}</Text>
                                                    {item.giaSP.map((price) => (
                                                        price.size === 'Nhỏ' ? (
                                                            <Text style={{ color: 'green', fontSize: 16, marginTop: 3, fontWeight: 'bold' }}>
                                                                {price.currency} {price.price}
                                                            </Text>
                                                        ) : null
                                                    ))}

                                                </View>

                                            </View>
                                            </TouchableOpacity>
                                        </View>
                                    )}
                                />

                                <TouchableOpacity onPress={() => navigation.navigate('ListScreen', {title: element.title}) }>
                                <Text style = {{color: 'black', alignSelf: 'flex-end', marginRight: 20, marginTop: 20, fontSize: 18,textDecorationLine: 'underline'}}>Xem thêm {element.title}</Text>
                                </TouchableOpacity>

                                
                            </View>
                        )
                    })}

</ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    title: {
        marginTop: 10,
        fontSize: 20,
        fontFamily: 'serif',
        color: 'black'
    },
    productItem: {
        
        marginLeft: 20,
        marginTop: 20,
        width: 180,
        height: 250,
        borderRadius: 10,
        backgroundColor: '#D3D3D3',
        borderBottomColor: 'black',
    },
    img: {
        width: 10,
        borderRadius: 10,
        height: 140,
        margin: 5,
    },
    buttonadd: {
        backgroundColor: 'orange',
        borderRadius: 5,
        marginTop: 30,
        marginLeft: 5,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    ngang: {
        marginTop: 10,
        flexDirection: 'row',
        marginLeft: 5,
    },
    imgadd: {
        width: 20,
        height: 20,
    },

    headerBar: {

        flexDirection: 'row',
    },

    ImageContainer: {
        height: 50,
        width: 50,
        borderRadius: 40,
        marginTop: 20,
        alignItems: 'center',
        marginLeft: 360,
        justifyContent: "center",
        overflow: 'hidden',
    },



    menu: {

        height: 90,
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,

    },

    item: {
        alignItems: 'center',
        marginHorizontal: 15,

    },

    image: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
        borderRadius: 30,


    },
    text: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: 'normal',
        color: 'green'
    },

});



export default HomeScreen

