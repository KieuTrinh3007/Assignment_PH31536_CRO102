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
     source={{uri: 'https://i.pinimg.com/564x/dc/62/cb/dc62cb032aaeddc205ed132493109e4f.jpg'}}
     style={{width: 200, height: 200, marginTop: 300, marginLeft: 120}}
    />
 
   </View>
  
    
  
 
);
}

export default Splash

const styles = StyleSheet.create({
  background: { ...StyleSheet.absoluteFillObject, backgroundColor: "black" },

})