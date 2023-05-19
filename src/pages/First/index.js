import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import Header from '../../components/Header';
import List from '../../components/List'

export default function First() {
 

  const [feed, setFeed] = useState([
    {
      id:'1',
      nome: 'Sushi',
      descricao: 'sushi bar',
      img: require('../../img/sushi.png'),
      avaliacao: '4,5',
      lotacao: '25/40',  
    },
    {
      id:'2',
      nome: 'Sushi',
      descricao: 'sushi bar',
      img: require('../../img/sushi.png'),
      avaliacao: '4,5',
      lotacao: '25/40',  
    },
    {
      id:'3',
      nome: 'Sushi',
      descricao: 'sushi bar',
      img: require('../../img/sushi.png'),
      avaliacao: '4,5',
      lotacao: '25/40',  
    },
    {
      id:'4',
      nome: 'Sushi',
      descricao: 'sushi bar',
      img: require('../../img/sushi.png'),
      avaliacao: '4,5',
      lotacao: '25/40',  
    },
    {
      id:'5',
      nome: 'Sushi',
      descricao: 'sushi bar',
      img: require('../../img/sushi.png'),
      avaliacao: '4,5',
      lotacao: '25/40',  
    },
    {
      id:'6',
      nome: 'Sushi',
      descricao: 'sushi bar',
      img: require('../../img/sushi.png'),
      avaliacao: '4,5',
      lotacao: '25/40',  
    },
    {
      id:'7',
      nome: 'Sushi',
      descricao: 'sushi bar',
      img: require('../../img/sushi.png'),
      avaliacao: '4,5',
      lotacao: '25/40',  
    }
  ])

 return (
   <View style={styles.container}>
    <Header/>

    <FlatList
      data={feed}
      renderItem={({item}) => <List data={item} />}
      showsVerticalScrollIndicator={false}
      keyExtractor={ (item) => item.id }
    />

   </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,

  },

})