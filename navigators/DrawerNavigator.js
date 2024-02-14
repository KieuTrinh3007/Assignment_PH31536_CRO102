import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity , Image} from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent';
import TabNavigator from './TabNavigator';
import ContactScreen from '../screens/ContactScreen';
import PersonalDetailsScreen from '../screens/PersonalDetailsScreen';



const DrawerDEMO = createDrawerNavigator();

const About = ({navigation}) => {
    return(
       
             <SafeAreaView style={{ backgroundColor: "black", ...StyleSheet.absoluteFillObject }}>
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
                        <Text style={styles.cart}>About</Text>
                    </View>

                </View>
             </SafeAreaView>
       
    )
}

const MyDrawer = () => {
    return (
        <DrawerDEMO.Navigator initialRouteName="Home"
            drawerContent={(props) => <CustomDrawerContent {...props} 
            />}
            screenOptions={{
                headerStyle: {
                  backgroundColor: 'black', 
                },
                headerTintColor: 'white', 
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                  drawerLabelStyle: {
                    color: 'white',
                    fontSize: 18, 
                    
                  },
                  headerShown: false,
                  
                 
              }}>
            <DrawerDEMO.Screen name="Home" component={TabNavigator} options={{
            }}/>
            <DrawerDEMO.Screen name="About" component={About} />
            <DrawerDEMO.Screen name="Contact" component={ContactScreen} />
        </DrawerDEMO.Navigator>
    );
}

const DrawerNavigator = () => {
  return (
    <MyDrawer />
  )
}

export default DrawerNavigator

const styles = StyleSheet.create({
    headerBar: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20,
    },
    cart: {
        fontWeight: 'bold',
        fontSize: 22,
        marginLeft: 150,
        color: "white",
    },
})