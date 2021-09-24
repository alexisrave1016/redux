import { createStore, combineReducers  } from "redux";
import CitasReducer from "../reducers/CitasReducer";
import {obtenerStateStorage, guardarStateStorage} from '../LocalStorage'

const reducer= combineReducers({
     
    citas: CitasReducer
    
})

const storageState = obtenerStateStorage()

const store = createStore(
    reducer, /* preloadedState, */
    storageState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   )
// mostrar data
store.subscribe(()=>{
    guardarStateStorage({
        citas: store.getState().citas
    })
})

export default store;
