import axios from 'axios';

const http = axios.create({
    baseURL: "https://localhost:44365/"
});

export default {
    getMovies() {
        return http.get(`api/Movie`);
    },
    getMovie(id) {
        return http.get(`api/Movie/${id}`);
    },
    addMovie(MovieModel) {
        return http.post(`api/Movie`, MovieModel);
    },
    updateMovie(id, MovieModel) {
        return http.put(`api/Movie/${id}`, MovieModel);
    },
    copyMovie(id, MovieModel) {
        return http.post(`api/Movie/${id}`, MovieModel);
    },

    delete(id) {
        return http.delete(`api/Movie/${id}`);
    },
}


