//store !!


import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter/counterSlice' 
import { pokemonSlice } from './slices/pokemon/pokemonSlice'
import { todosApi } from './apis/todosApi'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer, // nombre para identificar esta pieza en el store ,y apunta al counter reducer
    pokemons: pokemonSlice.reducer,  // poquemons va a apuntar a
  
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat (todosApi.middleware)
})




// redux: es el patron
// react redux: provee los componetes a react
// el counterSlice, esta exportando las acciones llamadas (action creator)
// middleware: es una fn que se ejecuta antes que otra
