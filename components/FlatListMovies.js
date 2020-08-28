import React from 'react';
import {FlatList} from 'react-native';
import Row from './Row'

const FlatListMovies = props => (
        <FlatList 
        renderItem={({item}) => (<Row {...item} onSelectMovie={props.onSelectMovie}/>)} 
        data={props.movies} 
        />
)
    


export default FlatListMovies