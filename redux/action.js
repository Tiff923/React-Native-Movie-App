//action types 
export const FETCHED_MOVIE = 'FETCHED_MOVIE'
export const SEARCHED_MOVIE = 'SEARCHED_MOVIE'

//action creators 
export const fetchMovie = fetched => ({
    type: FETCHED_MOVIE, 
    payload: fetched
})

export const searchMovie = search => ({
    type: SEARCHED_MOVIE, 
    payload: search 
})