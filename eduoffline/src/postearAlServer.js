import axios from 'axios';

function postearAlServer(ruta, info) {
    return axios.post(process.env.REACT_APP_SERVER_URL + ruta, info);
}

export {postearAlServer};