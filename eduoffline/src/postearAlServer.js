import axios from 'axios';

function postearAlServer(ruta, info) {
    return axios.post(process.env.REACT_APP_SERVER_URL + ruta, info);
}

function postearAlServerConAuth(ruta, info, usuario) {
    return axios.post(process.env.REACT_APP_SERVER_URL + ruta, {nombre: usuario.nombre, token: usuario.token, ...info});
}

function getDelServer(ruta){
    return axios.get(process.env.REACT_APP_SERVER_URL + ruta);
}

function getDelServerConAuth(ruta, usuario){
    return axios.get(process.env.REACT_APP_SERVER_URL + ruta + `?nombre=${usuario.nombre}&token=${usuario.token}`);
}

export {getDelServer, getDelServerConAuth, postearAlServer, postearAlServerConAuth};