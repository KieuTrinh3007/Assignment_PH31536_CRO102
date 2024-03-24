import { StyleSheet, Text, View,TextInput, TouchableOpacity, Image, ScrollView, Alert, ToastAndroid } from 'react-native'
import React, { useState } from 'react'

const BankCardScreen = ({ navigation }) => {
  const [soThe, setSoThe] = useState('');
  const [chuThe, setChuThe] = useState('');
  const [ngay, setNgay] = useState('');
  const [CVV, setCVV] = useState('');
  const handleConfirm = () => {
    Alert.alert(
      'Xác nhận',
      'Xác nhận thanh toán?',

      [
        {
          text: 'Hủy bỏ',
          onPress: () => ToastAndroid.show('Hủy', ToastAndroid.SHORT),
          style: 'cancel',
        },
        {
          text: 'Đồng ý',
          onPress: () => {


            navigation.navigate('OrderSuccess');

          },
        },
      ],
      { cancelable: false }
    );
  };

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
        <Text style={styles.cart}>Thanh toán</Text>
      </View>

      <View style={{ marginHorizontal: 20 }}>
        {/* Thông tin khách hàng */}

        <ScrollView>
          <Text style={{ color: 'black', fontSize: 20, fontWeight: 'normal' }}>Nhập thông tin thẻ</Text>
          <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 5 }} />

          <TextInput
            style={styles.text}
            value={soThe}
            onChangeText={(txt) => { setSoThe(txt) }}
            placeholder="Nhập số thẻ"
            placeholderTextColor="gray"
          />
          <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, }} />

          <TextInput
            style={styles.text}
            value={chuThe}
            onChangeText={(txt) => { setChuThe(txt) }}
            placeholder="Tên chủ thẻ"
            placeholderTextColor="gray"
          />
          <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1,  }} />

          <TextInput
            style={styles.text}
            value={ngay}
            onChangeText={(txt) => { setNgay(txt) }}
            placeholder="Ngày hết hạn"
            placeholderTextColor="gray"
          />
          <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1,  }} />

          <TextInput
            style={styles.text}
            value={CVV}
            onChangeText={(txt) => { setCVV(txt) }}
            placeholder="CVV"
            placeholderTextColor="gray"
          />
          <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, }} />

          {/* Phương thức vận chuyển */}

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', fontSize: 20, fontWeight: 'normal', marginTop: 30 }}>Thông tin khách hàng</Text>
            <TouchableOpacity onPress={() => { }}>
              <Text style={{ top: 35, fontSize: 17 }}>Chỉnh sửa</Text>
            </TouchableOpacity>
          </View>
          <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 5 }} />

          <Text style={{ color: 'gray', fontSize: 18, fontWeight: 'normal', marginTop: 15 }}>Phạm Kiều Trinh</Text>
          <Text style={{ color: 'gray', fontSize: 18, fontWeight: 'normal', marginTop: 10 }}>trinhpkph31536@fpt.edu.vn</Text>



          <Text style={{ color: 'gray', fontSize: 18, fontWeight: 'normal', marginTop: 10 }}>60 Láng Hạ, Ba Đình Hà Nội</Text>
          <Text style={{ color: 'gray', fontSize: 18, fontWeight: 'normal', marginTop: 10 }}>0123456789</Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', fontSize: 20, fontWeight: 'normal', marginTop: 20 }}>Phương thức vận chuyển</Text>
            <TouchableOpacity onPress={() => { }}>
              <Text style={{ top: 25, fontSize: 17 }}>Chỉnh sửa</Text>
            </TouchableOpacity>
          </View>
          <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 5 }} />

          <Text style={{ color: 'gray', fontSize: 18, fontWeight: 'normal', marginTop: 15 }}>Giao hàng nhanh - 15.000đ</Text>
          <Text style={{ color: 'gray', fontSize: 18, fontWeight: 'normal', }}>(Dự kiến giao hàng 10-15/3)</Text>




        </ScrollView>
      </View>


      {/* Thanh toán */}

      <View>


        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, marginHorizontal: 20 }}>

          <Text style={{ color: 'gray', fontSize: 18, fontWeight: 'normal' }}>Tạm tính</Text>
          <Text style={{ color: 'black', fontSize: 18, fontWeight: 'normal' }}>500.000</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }}>

          <Text style={{ color: 'gray', fontSize: 18, fontWeight: 'normal' }}>Phí vận chuyển</Text>
          <Text style={{ color: 'black', fontSize: 18, fontWeight: 'normal' }}>15.000</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }}>

          <Text style={{ color: 'gray', fontSize: 20, fontWeight: 'normal' }}>Tổng cộng</Text>
          <Text style={{ color: 'green', fontSize: 18, fontWeight: 'normal' }}>515.000</Text>
        </View>

        <TouchableOpacity onPress={handleConfirm}
          style={{ backgroundColor: "green", width: '95%', margin: 10, borderRadius: 10 }}>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 20, padding: 10, fontWeight: 'bold' }}>Tiếp tục </Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default BankCardScreen

const styles = StyleSheet.create({
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20
  },
  cart: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    color: "black",
    marginTop: 5,
    marginLeft: 130
  },
  text: {
    fontSize: 16,
    marginTop: 5,
  },
})