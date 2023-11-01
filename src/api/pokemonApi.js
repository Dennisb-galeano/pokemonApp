
//uso de axios, la exportacion esta por defecto, axios se usa igual que el fetch se remplazaen el ejercicio


import axios from "axios";

export const pokemonApi = axios.create({ 
 baseURL: 'https://pokeapi.co/api/v2' // se coloca la parte del URL que es constante
});



/* axios.create(): permite crear una configutacion estandar para no tener que repetir el codigo
el resultado lo coloca en un objeto data
*/
