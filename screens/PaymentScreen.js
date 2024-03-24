import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'

const PaymentScreen = ({ navigation }) => {
  const [name, setName] = useState('Phạm Kiều Trinh');
  const [email, setEmail] = useState('trinhpkph31536@fpt.edu.vn');
  const [sdt, setSdt] = useState('');
  const [address, setAddress] = useState('');
  const [selectedShippingMethod, setSelectedShippingMethod] = useState(null);
  const [selectedPay, setSelectedPay] = useState(null);

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
          <Text style={{ color: 'black', fontSize: 20, fontWeight: 'normal' }}>Thông tin khách hàng</Text>
          <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 5 }} />

          <TextInput
            style={styles.text}
            value={name}
            onChangeText={(txt) => { setName(txt) }}
            placeholder="Họ và tên"
            placeholderTextColor="gray"
          />
          <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1 }} />

          <TextInput
            style={styles.text}
            value={email}
            onChangeText={(txt) => { setEmail(txt) }}
            placeholder="Họ và tên"
            placeholderTextColor="gray"
          />
          <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1 }} />

          <TextInput
            style={styles.text}
            value={sdt}
            onChangeText={(txt) => { setSdt(txt) }}
            placeholder="Số điện thoại"
            placeholderTextColor="gray"
          />
          <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1 }} />

          <TextInput
            style={styles.text}
            value={address}
            onChangeText={(txt) => { setAddress(txt) }}
            placeholder="Địa chỉ"
            placeholderTextColor="gray"
          />
          <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1 }} />

          {/* Phương thức vận chuyển */}
          <Text style={{ color: 'black', fontSize: 20, fontWeight: 'normal', marginTop: 20 }}>Phương thức vận chuyển</Text>
          <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 5 }} />

          <TouchableOpacity onPress={() => setSelectedShippingMethod('fast')}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text
                style={[styles.shippingMethod, selectedShippingMethod === 'fast' && styles.selectedShippingMethod]}>
                Giao hàng nhanh - 15.000đ
              </Text>
              {selectedShippingMethod === 'fast' && <Image source={require('../img/check.png')} style={{ marginLeft: 120, width: 30, height: 30, top: 20 }} />}
            </View>
          </TouchableOpacity>

          <Text style={{ color: 'gray', fontSize: 18, fontWeight: 'normal', }}>Dự kiến giao hàng 10-15/3</Text>


          <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 5 }} />

          <TouchableOpacity onPress={() => setSelectedShippingMethod('COD')}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text
                style={[styles.shippingMethod, selectedShippingMethod === 'COD' && styles.selectedShippingMethod]}>
                Giao hàng COD - 20.000đ
              </Text>
              {selectedShippingMethod === 'COD' && <Image source={require('../img/check.png')} style={{ marginLeft: 120, width: 30, height: 30, top: 20 }} />}
            </View>
          </TouchableOpacity>

          <Text style={{ color: 'gray', fontSize: 18, fontWeight: 'normal', }}>Dự kiến giao hàng 8-10/3</Text>
          <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1 }} />
          {/* Hình thức thanh toán */}

          <Text style={{ color: 'black', fontSize: 20, fontWeight: 'normal', marginTop: 20 }}>Hình thức thanh toán</Text>
          <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 5 }} />

          <TouchableOpacity onPress={() => setSelectedPay('VISA')}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text
                style={[styles.shippingMethod, selectedPay === 'VISA' && styles.selectedShippingMethod]}>
                Thẻ VISA/MASTERCREDIT
              </Text>
              {selectedPay === 'VISA' && <Image source={require('../img/check.png')} style={{ marginLeft: 120, width: 30, height: 30, top: 10 }} />}
            </View>
          </TouchableOpacity>


          <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 5 }} />

          <TouchableOpacity onPress={() => setSelectedPay('ATM')}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text
                style={[styles.shippingMethod, selectedPay === 'ATM' && styles.selectedShippingMethod]}>
                Thẻ ATM
              </Text>
              {selectedPay === 'ATM' && <Image source={require('../img/check.png')} style={{ marginLeft: 250, width: 30, height: 30, top: 20 }} />}
            </View>
          </TouchableOpacity>

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

        <TouchableOpacity onPress={() => navigation.navigate("BankCardScreen")}
          style={{ backgroundColor: "green", width: '95%', margin: 10, borderRadius: 10 }}>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 20, padding: 10, fontWeight: 'bold' }}>Tiếp tục </Text>
        </TouchableOpacity>

      </View>
    </View>

  )
}

export default PaymentScreen

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
  shippingMethod: {
    color: 'gray',
    fontSize: 18,
    fontWeight: 'normal',
    marginTop: 15,
  },
  selectedShippingMethod: {
    color: 'green',
    fontWeight: 'bold',
  },
})