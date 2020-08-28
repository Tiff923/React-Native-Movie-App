import React from 'react' 
import {TextInput, StyleSheet, View } from 'react-native';
import FlatListMovies from '../components/FlatListMovies'
import MovieDetailScreen from './MovieDetailScreen';
import {connect} from 'react-redux'; 
import {searchMovie} from '../redux/action'

class MovieListScreen extends React.Component{
    state = {
          search:''
        }
    
    filterSearch = (text) => {
    console.log('input', text)

    let newData = this.props.default.filter((obj)=>{ 
      let objTitle = obj.Title.toUpperCase()
      let textTitle = text.toUpperCase()
      return objTitle.indexOf(textTitle) > -1
    })

    this.props.searchMovie(newData)
    this.setState({ 
      search: text
    })

    }

    handleSelectMovie = (movie) => {
        this.props.navigation.navigate('MovieDetail', movie)
    }

   render(){
    console.log('rendering')
    console.log('state', this.state.search)
    console.log('navigation movie', this.props.movies)
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInputStyle}
        onChangeText={text => this.filterSearch(text)}
        value={this.state.search}
        placeholder='Search here'/>
        <FlatListMovies movies={this.props.movies} onSelectMovie={this.handleSelectMovie}/>
      </View>
    );
    }
    
}

const styles = StyleSheet.create({
    container: {
      paddingTop:35, 
      flex: 1,
      backgroundColor: '#ffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textInputStyle:{
      height: 60, 
      width: 250,
      borderWidth: 2, 
      borderColor: 'black'
    }
  });

const MapStateToProps = (state) => ({
  default: state.default, 
  movies: state.movies
})

export default connect(MapStateToProps, {searchMovie:searchMovie})(MovieListScreen)