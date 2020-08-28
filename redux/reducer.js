import {combineReducers} from 'redux'
import {FETCHED_MOVIE, SEARCHED_MOVIE} from './action'


const defaultReducer = (state=[], action) => {
    switch(action.type){
        case FETCHED_MOVIE:
            return action.payload 
        default: 
            return state
    }
}

const movieReducer = (state=[], action) => {
    switch(action.type){
        case FETCHED_MOVIE:
            return action.payload 
        case SEARCHED_MOVIE:
            return action.payload
        default: 
            return state
    }
}

const reducer = combineReducers({
    default: defaultReducer, 
    movies: movieReducer 
})

export default reducer 