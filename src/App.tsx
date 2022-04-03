import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import music_data from "./music-data.json";
import SongCard from "./Components/SongCard"; 
import SearchBar from './Components/SearchBar';
import React, {useState} from 'react';


export default function App() {

  const [list,setList]=useState(music_data);

  const renderSong=({item})=><SongCard song={item}/>;
  const renderSeparator= ()=> <View style={styles.separator}></View>

  const handleSearch=(text)=>{
    const filteredList = music_data.filter(song=>{
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });

    setList(filteredList);
  }


  return (
    <SafeAreaView style={styles.container}>

      <SearchBar onSearch={handleSearch}/>

      <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={list}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeparator}
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 },
  separator:{
    borderWidth:1,
    borderColor:"#e0e0e0",
    marginLeft:10,
    marginRight:10,
  }
    
});
