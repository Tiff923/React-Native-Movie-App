import React from 'react' 
import {Text, StyleSheet, View } from 'react-native';

class MovieDetailScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>MovieDetailScreen</Text>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
      paddingTop:35, 
      flex: 1,
      backgroundColor: '#ffff',
      alignItems: 'center',
      justifyContent: 'center',
    }
})

export default MovieDetailScreen