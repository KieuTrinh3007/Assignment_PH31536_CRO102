import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const OrderSuccess = ({navigation}) => {
    return (
        <View>
            <View style={styles.headerBar}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View>
                        <Image
                            source={require('../img/back1.png')}
                            style={{ width: 25, height: 25 }}
                            resizeMode="cover"
                        />
                    </View>
                </TouchableOpacity>
                <Text style={styles.cart}>Thông báo</Text>

                <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
                    <Image style={{ width: 25, height: 25 }}
                        resizeMode="cover"
                        source={require('../img/cart.png')}
                    />
                </TouchableOpacity>
            </View>

            {/* Thông tin kh */}
            <View style={{ marginHorizontal: 20 }}>


                <Text style={{ color: 'green', alignSelf: 'center', fontSize: 17, }}>Bạn đã đặt hàng thành công</Text>
                <Text style={{ color: 'green', alignSelf: 'center', fontSize: 17, }}>14/02/2024</Text>



                <Text style={{ color: 'black', fontSize: 20, fontWeight: 'normal', marginTop: 30 }}>Thông tin khách hàng</Text>
                <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 5 }} />
                <Text style={{ color: 'gray', fontSize: 18, fontWeight: 'normal', marginTop: 15 }}>Phạm Kiều Trinh</Text>
                <Text style={{ color: 'gray', fontSize: 18, fontWeight: 'normal', marginTop: 10 }}>trinhpkph31536@fpt.edu.vn</Text>
                <Text style={{ color: 'gray', fontSize: 18, fontWeight: 'normal', marginTop: 10 }}>60 Láng Hạ, Ba Đình Hà Nội</Text>
                <Text style={{ color: 'gray', fontSize: 18, fontWeight: 'normal', marginTop: 10 }}>0123456789</Text>

                {/* Phương thức VC */}
                <Text style={{ color: 'black', fontSize: 20, fontWeight: 'normal', marginTop: 30 }}>Phương thức vận chuyển</Text>
                <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 5 }} />
                <Text style={{ color: 'gray', fontSize: 18, fontWeight: 'normal', marginTop: 15 }}>Giao hàng nhanh - 15.000đ</Text>
                <Text style={{ color: 'gray', fontSize: 18, fontWeight: 'normal', }}>Dự kiến giao hàng 7-10/3</Text>


                {/* Hình thức thanh toán */}
                <Text style={{ color: 'black', fontSize: 20, fontWeight: 'normal', marginTop: 30 }}>Hình thức thanh toán</Text>
                <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 5 }} />
                <Text style={{ color: 'gray', fontSize: 18, fontWeight: 'normal', marginTop: 15 }}>Thẻ VISA/MASTERCREDIT</Text>


                {/* Đơn hàng đã chọn */}
                <Text style={{ color: 'black', fontSize: 20, fontWeight: 'normal', marginTop: 30 }}>Đơn hàng đã chọn</Text>
                <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 5 }} />

            </View>
            {/* Thanh toán */}

            <View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, marginHorizontal: 20 }}>

                    <Text style={{ color: 'black', fontSize: 18, fontWeight: 'normal' }}>Đã thanh toán</Text>
                    <Text style={{ color: 'black', fontSize: 18, fontWeight: 'normal' }}>515.000</Text>
                </View>

                <TouchableOpacity onPress= {() => navigation.navigate('CamNang')}
                    style={{ backgroundColor: "green", width: '95%', margin: 10, borderRadius: 10 }}>
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 20, padding: 10, fontWeight: 'bold' }}>Xem cẩm nang trồng cây </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress= {() => navigation.navigate('TabNavigator')}
                    style={{ margin: 10 }}>
                    <Text style={{ color: 'black', textAlign: 'center', fontSize: 20,textDecorationLine: 'underline',fontWeight: 'bold' }}>Quay về trang chủ </Text>
                </TouchableOpacity>


            </View>
        </View>


    )
}

export default OrderSuccess

const styles = StyleSheet.create({
    headerBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20
    },
    cart: {
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center',
        color: "black",
        marginTop: 10
    },
})