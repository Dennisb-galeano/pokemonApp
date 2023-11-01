// este file va a tener todos los thunks de la app de pokemon, y va a realizar las peticiones HTTP para hacerposteos y traer info...


/* thunks, 
    son acciones asincronas que disparan otra accion cuando se resuelve la peticion asincrona
    redux y react redux no permiten crear este tipo de acciones.
    cuando se ejecute el tunks, este va a llamar el startLoadPokemons o al setPokemons, se crea archivo ""
*/

import { setPokemons, startLoadPokemons } from "./pokemonSlice"
import { pokemonApi } from "../../../api/pokemonApi";


export const getPokemons = ( page = 0) => { //una fn
  return async ( dispatch, getState) => {  // (1)  
    dispatch( startLoadPokemons()); //pokemonSlice

    //TODO: Realizar peticion http 

    /*
    (2) ejemplo fetch()
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10}`); //10 es la candidad de valors que me va a traer por pagina
      const data = await resp.json();
      console.log( data);
   

    (3) ejemplo con axios  */

      const {data} = await pokemonApi.get( `/pokemon?limit=10&offset=${ page * 10}`); //de la respuesta tomo la data y de aho los resultados

      dispatch( setPokemons({ pokemons: data.results, page: page + 1 }) );
  }
}


/* (1) el return, es otra fn. fn que regresa otra y esa se llama con el arg (dispatch), este dsipara otra accion, 
segundo arg (getState): obtiene el valor del rootState, "de la autenticacion del usuario o informacion del State" 

  (2) ejemplo fetch, proporciona una interfaz JS para acceder y manipular partes del canal HTTP, como peticiones y respuestas 
      axios tambien 
      - offset, (o la pagina) va a ser controlado por el page de la fn, entonces se cambia el link por backtics y despues del = se coloca simplestring ${0 * 10 } 

  (3) AXIOS, "codigo mas limpio" puedo usar la libreria axios realizando la instalacion yarn add axios, se utiliza igual uqe el fetch api.
      - se crea la carpeta api, alli estaran los axios, pokemonApi.
      - se importa en el nuevo archivo pokemonApi.js.  La exportacion de axios se realiza por defecto
      */