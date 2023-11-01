import { useDispatch, useSelector } from 'react-redux';
import {increment,incrementBy, decrement } from './store/slices/counter/counterSlice';


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

//useSelector, se usa para leer o seleccionar algo de nuestro store, se importa de react Redux
/*se va a desestructurar algo que esta en el useSelector,() y se llama una fn tiene como primer argumento el state, despues => se llama puntualmente lo uqe me interesa o necesito,
 en este caso se llama el counter del counterSlice que es mi objeto general,, y de ahi desestructoro lo que necesito uqe es el counterValue */
// le estoy diciendo que del state me tome tome todo el objeto(counter),y de aho que saque el counterValue .. o valor uqe necesite
const { counterValue}= useSelector(state => state.counter) 
const dispatch = useDispatch();  //esta fn me va a disparar el evento, este ya sabe a que reducer va a llegar, y todo lo uqe necesita ya uqe fn etsta creada desde el slice
                                 // este dispatch lo voy a usar en el oncliick


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1> counter is { counterValue } </h1>
      <div className="card">
 
         <button type="button"  onClick={ () => dispatch( increment() ) } > {/* la accion uqe me pide es increment, etsa accion se va a importar desde el counterSlice. increment se exporta como una funcion*/}
          Increment
        </button>

        <button type="button"  onClick={ () => dispatch( decrement() ) } > {/* la accion uqe me pide es increment, etsa accion se va a importar desde el counterSlice. increment se exporta como una funcion*/}
          Decrement
        </button>


        <button type="button"  onClick={ () => dispatch( incrementBy() ) } > {/* la accion uqe me pide es increment, etsa accion se va a importar desde el counterSlice. increment se exporta como una funcion*/}
          Increment by 2
        </button>
   
      </div>
    </>
  )
}

export default App



//el store solo cambia el estado por medio de acciones