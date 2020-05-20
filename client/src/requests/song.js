import axios from 'axios';

function fetchSongs() {
    return axios.get(`/songs`)
}

export default fetchSongs;