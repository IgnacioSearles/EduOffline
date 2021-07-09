import axios from 'axios';

function postearAlServer(ruta, info) {
    return axios.post(process.env.REACT_APP_SERVER_URL + ruta, info);
}

function getDelServer(ruta){
    return axios.get(process.env.REACT_APP_SERVER_URL + ruta);
}

export {getDelServer, postearAlServer};