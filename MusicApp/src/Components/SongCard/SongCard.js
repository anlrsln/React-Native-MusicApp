import React from "react"
import { SafeAreaView,View,Text,Image,StyleSheet } from "react-native"
import styles from "./SongCard.style"


const SongCard=({songs})=>{
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.imgBox}>
                <Image style={styles.img} source={{uri:songs.imageUrl}}/>
            </View>
            <View style={styles.cardBody}>
                <Text style={styles.title}>{songs.title}</Text>
                <View style={styles.content_container}>
                    <View style={styles.info}>
                        <Text style={styles.artist}>{songs.artist}</Text>
                        <Text style={styles.year}>{songs.year}</Text>
                    </View>
                    {songs.isSoldOut && 
                        <View style={styles.soldout}>
                            <Text style={styles.soldout_text}>TÜKENDİ</Text>
                        </View>
                    }
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SongCard;