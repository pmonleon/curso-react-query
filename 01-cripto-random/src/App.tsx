// import { Dispatch, SetStateAction, useEffect, useReducer, useState } from 'react'
import './App.css'
import { useRandomNumber } from './hooks/useRandomNumber'


const App = () => {

 const query =  useRandomNumber()


  return (
    <div className="App">
      <h1>
         Cripto Random
      </h1>
     
      { query.isFetching
        ?  <h2>Cargando ... </h2>
        :  <h2>Número aleatorio : { query.data }</h2>
      }
      { query.isError && <h2> {`${ query.error }`} </h2> }

      <button
        type='button'
        onClick={() => query.refetch() }
        disabled = { query.isFetching }
      >
        { query.isFetching ? '...' : 'Nuevo número'}
      </button>
    </div>
  )
}

export default App
