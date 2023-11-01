
import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page:0,
        pokemons: [],
        isloading: false,
    },
    reducers: {
        startLoadPokemons: (state, /* action */ ) => {
          state.isloading= true;
        },

        setPokemons: (state, action) =>{ // esta accion es el state.loading...
          state.isloading = false;
          state.page = action.payload.page;
          state.pokemons = action.payload.pokemons;
          // console.log(action);
        }

    }
});


// Action creators are generated for each case reducer function
export const { startLoadPokemons, setPokemons } = pokemonSlice.actions;



/*vamos a tener dos Recucer
 1. startLoadPokemons: Cuando yo quiero cargar los pokemons , el esado va a uqeda cargando
      por el toolkit puedo llamar el state.isloading= true; sin necesidad de spread o return , ej "no es necesario !!" ya que se esta muntando el state y una de las librerias del toolkitregresa un nuevo state
      Return{
        ...state,
        inloading: true 


 2. setPokemons: ocupar un espacio cuando ya tenemos los pokemon
        va a tener el estate, la accion " que es la info que estoy esperando de el pokemon"
      }
*/

/* thunks, 
    son acciones asincronas que disparan otra accion cuando se resuelve la peticion asincrona
    redux y react redux no permiten crear este tipo de acciones.
    cuando se ejecute el tunks, este va a llamar el startLoadPokemons o al setPokemons, se crea archivo ""

*/