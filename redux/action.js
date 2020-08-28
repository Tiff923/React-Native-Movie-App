//action types 
//export const DELETE_MOVIE = 'DELETE_MOVIE'
export const FETCHED_MOVIE = 'FETCHED_MOVIE'
export const SEARCHED_MOVIE = 'SEARCHED_MOVIE'

//action creators 
// export const deleteMovie = movieToDelete => ({
//     type: DELETE_MOVIE, 
//     payload: movieToDelete
// })
export const fetchMovie = fetched => ({
    type: FETCHED_MOVIE, 
    payload: fetched
})

export const searchMovie = search => ({
    type: SEARCHED_MOVIE, 
    payload: search 
})