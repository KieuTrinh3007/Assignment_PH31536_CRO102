import { StyleSheet, Text, View, Image} from 'react-native'
import React, {useEffect} from 'react'

const Splash = ({navigation}) => {

  useEffect(() => {
    const timer = setTimeout(() => {
     navigation.replace('Login')
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    
   <View style = {styles.background}>
    <Image
     source={require('../img/logo_splash.png')}
     style={{width: 200, height: 200, marginTop: 300, marginLeft: 120}}
    />
 
   </View>
  
    
  
 
);
}

export default Splash

const styles = StyleSheet.create({
  background: { ...StyleSheet.absoluteFillObject, backgroundColor: "black" },

})