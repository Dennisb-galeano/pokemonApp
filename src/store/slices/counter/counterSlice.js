
/*  slice= rebanada, porcion... este es una funcion que recibe un objeto. 
    el toolkit contiene el objeto Slice. la funcion CounterSlice, 
    permite rapidamebnte crear reducers, permite definir el initial State y permite definirle el nombre con el cual las acciones 
    van a salir disparadas hacia ese lugar y para identificar la accion
*/

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counterValue: 10,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      state.counterValue += 1; // el state lo recibo como argumento y me va a mutar el estado // incrementa 1
    },
    incrementBy: (state) =>{ state.counterValue += 2},
    decrement: (state) =>{state.counterValue -= 1} 
  },
})

// Action creators are generated for each case reducer function


export const { increment, incrementBy, decrement } = counterSlice.actions; //action creator functions
/* 
la accion que me interesa disparar es la de incrementar.. el increment, 

.actions en la fn que creamos se retornan por defecto las acciones que estan en el objeto 
      de esas acciones voy se toma el increment
*/




/* 
 código copiado de la instalacion de toolkit https://redux-toolkit.js.org/tutorials/quick-start 

se importa el createSlice de '@reduxjs/toolkit'
      - se crea el initria state, como uin objeto con el valor que se requiera

      
*/