import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const OrderHistoryScreen = ({navigation}) => {
  
  return (
    <SafeAreaView style={{ backgroundColor: "black", ...StyleSheet.absoluteFillObject }}>

<View>

<View style={styles.headerBar}>
  <TouchableOpacity onPress={() => navigation.openDrawer()}>
    <View>
      <Image
        source={require('../img/menu.png')}
        style={styles.image1}
        resizeMode="cover"
      />
    </View>
  </TouchableOpacity>

  <View>
    <Text style={styles.cart}>Order History</Text>
  </View>

</View>

</View>
      <ScrollView>

      </ScrollView>
    </SafeAreaView>
  )
}

export default OrderHistoryScreen

const styles = StyleSheet.create({
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
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
    marginRight: 90,
    borderRadius: 10,
    marginBottom: 5
  },
  image2: {
    width: 40,
    height: 40,
    marginLeft: 90,
    borderRadius: 10,
    marginTop: 10,
  },
})