import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';

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

const persistConfig = {
    key: "usuario",
    storage: storageSession
};

const pReducer = persistReducer(persistConfig, fullReducer);

export default pReducer;