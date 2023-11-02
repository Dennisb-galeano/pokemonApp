// clase 270, trae con el id, usando RTK.,, crea custom hook que almacela la data en el cache

//el RTK Query, esta para controlar y optimizarlas peticiones HTTP,
// se hace la peticion, se trae la data y se dispara la accion para establecer la data.

import { useGetTodosQuery } from "./store/apis/todosApi";


export const TodoApp = () => {

  const {data: todos = [] , isLoading} = useGetTodosQuery();

  return (

    <>
    <h1>Todos - RTK Query</h1>
    <hr/>
    <h4>is loading : {isLoading ? 'true' : 'false'}  </h4>

    <pre>...</pre>

    <ul>
      { todos.map ( todo => (
          <li key={ todo.id}>
              <strong> { todo.completed ? 'Done' : 'Pending'} </strong>   {/* pregunta el tipo de estado, si esta completado o no  */}
               {todo.title}
          </li>
        ))
      }

    </ul>
    <button>Next Todo</button>

    </>
  )
}
