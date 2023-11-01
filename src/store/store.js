


import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter/counterSlice' 
import { pokemonSlice } from './slices/pokemon/pokemonSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer, // nombre para identificar esta pieza en el store ,y apunta al counter reducer
    pokemons: pokemonSlice.reducer  // poquemons va a apuntar a
  },
})




// redux: es el patron
// react redux: provee los componetes a react
// el counterSlice, esta exportando las acciones llamadas (action creator)