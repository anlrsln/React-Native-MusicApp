import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';

import songsData from "./music.json"
import SongCard from './Components/SongCard/';
import SearchBar from './Components/SearchBar';

const App= () => {

  const [list,setList]=useState(songsData);


  const renderSong=({item})=> <SongCard songs={item}/>
  const renderSeperator=()=><View style={styles.seperator}></View>
  const onSearch=(text)=>{
    const filteredList=songsData.filter(song=>{
      const searchedText=text.toLowerCase();
      const songTitle=song.title.toLowerCase();
      return (songTitle.indexOf(searchedText)) > -1;
    });
    setList(filteredList);
  }
  return (
    <SafeAreaView style={StyleSheet.container}>
      <View style={styles.searchBar_container}>
        <SearchBar onSearch={onSearch}/>
      </View>
      <View style={styles.list_container}>
        <FlatList data={list} renderItem={renderSong} ItemSeparatorComponent={renderSeperator}/>
      </View>
    </SafeAreaView>
  );
};



export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20
  },
  seperator:{
    borderWidth:1,
    borderColor:"#e0e0e0"
  },
  list_container:{
    marginBottom:150
  }
})
