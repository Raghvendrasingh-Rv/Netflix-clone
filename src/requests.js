const APIKEY="a5ab2f736cfb21fa3416c35bddc1fc0e"

const requests = {
    fetchTrending:`/trending/all/week?api_key=a5ab2f736cfb21fa3416c35bddc1fc0e&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=a5ab2f736cfb21fa3416c35bddc1fc0e&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=a5ab2f736cfb21fa3416c35bddc1fc0e&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchHorroMovies:`/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchRomanticMovies:`/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${APIKEY}&with_genres=99`
}

export default requests;

//https://api.themoviedb.org/3/discover/tv?api_key=a5ab2f736cfb21fa3416c35bddc1fc0e&with_networks=213`