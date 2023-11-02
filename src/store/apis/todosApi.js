

import {createApi, fetchBaseQuery}  from '@reduxjs/toolkit/query/react';

export const todosApi= createApi({
  reducerPath: 'todos',  //nombre del reducer

  baseQuery: fetchBaseQuery({  //ayuda a traer la peticion del htttp, es una fn callback el " fetchBaseQ.."
    baseUrl: 'http://jsonplaceholder.typicode.com'
  }),
  //endpoins funciones que se van a llamar para traer la informacion
  endpoints: (builder) => ({

    getTodos: builder.query({
      query: () => '/todos' //lo que hace este query es llamar al /todos. 
    }),

    getTodoById: builder.query({ //este endpoint va a llamar el todo por el id
      query: (todoId) => `/todos/${todoId}` // estoy concatenando la ruta con el path inicial de baseURL
    }),

  }) 

})

export const{ useGetTodosQuery, useGetTodoQuery } = todosApi;


/*cuando se crea un create api, crea custom hooks  y ese va a crear uno llamado useGetTodosQuery
el rtk crea el customHook, le coloca:
  query: para saber que es una peticion get, mutation: en caso de que sea una mutacion como un postMessage, put delete.. entonces
  use: por seguir el estandar de reactHooksModule
  getTodos: es lo que se ectrinio en la fn pero en pascalCase



que tiene toda la informacion necesaria para saber si cargo la informacion o si hay buildErrorMessage
*/