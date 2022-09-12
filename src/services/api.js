import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'e2ab7616285daea8fac6003f5ccdd72f';

export const getTrendyMovies = async() => {
    try {
        const response = await axios.get(`/trending/movie/week?api_key=${API_KEY}`); 
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
};

export const getSearchedMovies = async(query) => {
    try {
        const response = await axios.get(`/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&include_adult=false`); 
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
};

export const getMovieDetails = async(movieId) => {
    try {
        const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}&language=en-US`); 
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
};

export const getMovieCredits = async(movieId) => {
    try {
        const response = await axios.get(`/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`); 
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
};

export const getMovieRewiews = async(movieId) => {
    try {
        const response = await axios.get(`/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`); 
         console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
};






