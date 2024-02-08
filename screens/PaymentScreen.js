import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const PaymentScreen = ({navigation}) => {
  return (
   <SafeAreaView style={{ backgroundColor: "black", ...StyleSheet.absoluteFillObject }}>

<View>
        <View style={styles.headerBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={{ marginLeft: 20, marginTop: 20 }}>
              <Image
                source={require('../img/back1.png')}
                style={{width: 15, height: 20}}
                resizeMode="cover"
              />
            </View>
          </TouchableOpacity>

          <View>
            <Text style={styles.cart}>Payment</Text>
          </View>

        </View>
      </View>

      <View style = {{flexDirection: 'row', position: 'absolute', top: 750, backgroundColor: 'black', width: '100%', height: 70}}>
        <View>
        <Text style = {{color: 'white', marginLeft: 10,marginTop: 10, fontSize: 15}}>Total Price</Text>
        <Text style = {{color: 'white', marginLeft: 10, fontSize: 25, fontWeight: 'bold'}}>$ 4.20</Text>
      </View>
      <TouchableOpacity onPress={() => {}}
      style = {{backgroundColor: "orange", width: '55%',justifyContent: 'center', alignItems: 'center', marginLeft: 80, margin: 10, borderRadius: 15}}>
          <Text style = {{color: 'white', textAlign: 'center', fontSize: 19,fontWeight: 'bold'}}>Pay from Credit Card</Text>
      </TouchableOpacity>
      </View>
   </SafeAreaView>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cart: {
    fontWeight: 'bold',
    fontSize: 22,
    marginLeft: 150,
    top: 10,
    color: "white",
  },
  
})