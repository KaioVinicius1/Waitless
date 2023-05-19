import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Header() {
  const navigation = useNavigation();

 return (
   <View style={styles.header}>
      <TouchableOpacity
        onPress={() =>navigation.navigate('Signin')}
      >
      <Image 
      source={require('../../img/menu.png')}
      style={styles.menu}
      />
    </TouchableOpacity>

    <TouchableOpacity
       onPress={() =>navigation.navigate('Login')}
    >
      <Image 
      source={require('../../img/logo.png')}
      style={styles.logo}
      />
    </TouchableOpacity>

   </View>
  );
}

const styles = StyleSheet.create({
    header:{
      height: 80,
      backgroundColor: '#FFB573',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'space-between',
      paddingLeft: 15,
      paddingRight:15,
      shadowColor: 'green',
      borderBottomWidth: 0.2,
      elevation: 30
    },
 
})