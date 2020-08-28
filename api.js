const processMovies = (obj, index) => ({
    key: ''+ index,
    Title: obj.Title, 
    Year: obj.Year, 
    Poster: obj.Poster
})


export const fetchMovies = async() => {
    try{
        const response = await fetch('http://www.omdbapi.com/?apikey=8187b6e1&s=batman')
        const {Search} = await response.json()
        return Search.map(processMovies)
    }
    catch(error){
        console.log(error)
    }
}

// export const fetchMovieDetail = async() => {
//     try{
//         const response = await fetch('http://www.omdbapi.com/?apikey=8187b6e1&t=Batman+v+Superman&y=2016&plot=full')
//         const {Search} = await response.json()
//         return Search.map(processMovies)
//     }
//     catch(error){
//         console.log(error)
//     }
// }