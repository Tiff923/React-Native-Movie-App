import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet} from 'react-native';
import {fetchMovies} from './api'
import {createStackNavigator} from "@react-navigation/stack";
import MovieListScreen from './screens/MovieListScreen'
import MovieDetailScreen from './screens/MovieDetailScreen'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import store from './redux/store'; 
import { Provider } from 'react-redux';
import {fetchMovie} from './redux/action'

const Stack = createStackNavigator();

export default class App extends React.Component {
  
  componentDidMount(){
    console.log('componentDidMount')
    this.getMovie()
    console.log('end')
  }

  getMovie = async() => {
    const results = await fetchMovies()
    store.dispatch(fetchMovie(results))
    console.log('store after fetchMovie', store.getState())
  }

  render(){
    return(
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="MovieList">
          <Stack.Screen name="MovieList" component={MovieListScreen}>
          </Stack.Screen>
          <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
  
}