
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon/thunks';

export const PokemonApp = () => {

  const dispatch = useDispatch(); // me crea un fn para disparar cualquier accion
  const{ isLoading,pokemons = [] , page} = useSelector(state => state.pokemons  ); 


  useEffect(() => {     //si quiero hacer algo cuando el componente es creado por primera vez, y solo una vez

    dispatch( getPokemons() ); //que accion quiero disparar, en "thunk" ,, ahi se manda la pagina a la que quiero cambiar como no tiene valor lo toma como pag 0
  }, [])



  return (
    <>
      <h1>PokemonApp</h1>
      <hr/>
      <span>Loading: { isLoading ? 'True': 'False'} </span>


      <ul>
      {
        pokemons.map ( pokemon => (
          <li key={pokemon.name}> {pokemon.name} </li> // si no sabemos que tiene el objeto del pokemosn quiero el name, lo que tiene el objeto lo puedo ver en el reduxdevtools
          ))

      }

      </ul>

      <button
      disabled={ isLoading}
      onClick={ () => dispatch ( getPokemons(page) )   }
      >
        next
      </button>


    </>
  )
}

//se crea el slice en js para manejar esta pieza del store
