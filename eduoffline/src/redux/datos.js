import { combineReducers } from 'redux';

function reducerUsuario(usuario = null, accion){
    switch (accion.type) {
        case "SET_USUARIO":
            return accion.usuario;
        default:
            return usuario;
    }
}

const fullReducer = combineReducers({
    usuario: reducerUsuario
});

export default fullReducer;