import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Row = (props) => (
    <TouchableOpacity 
    style={styles.rowPadding}
    onPress={() => {props.onSelectMovie(props)}}>
        <Image source={{uri: props.Poster}} style={styles.image} />
        <View style={styles.rowImage}>
            <View style={styles.rowText}>
                <Text>{props.Title}</Text>
                <Text>{props.Year}</Text>
            </View>
        </View>
    </TouchableOpacity> 
)  

const styles = StyleSheet.create({
    rowPadding: {padding: 20},
    rowImage: {flexDirection:'row'}, 
    rowText:{flexDirection:'column'}, 
    image: {
        width:250, 
        height:200
    }
  })  

export default Row 