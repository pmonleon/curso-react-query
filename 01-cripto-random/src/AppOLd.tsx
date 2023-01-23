import { Dispatch, SetStateAction, useEffect, useReducer, useState } from 'react'
import './App.css'

const getNumberFromApi = async(setLoading:Dispatch<SetStateAction<boolean>>, setErrror:Dispatch<SetStateAction<string>> ):Promise<number> => {
  setLoading(true)
  try {
    const resp = await fetch( 'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new', {
      method:'GET'
    })
    const numberString = await resp.text()
    return Number(numberString)
    
  } catch (error:any) {
    console.log(error)
    setErrror(error.message)
    return 0
  }finally{
    setLoading(false)
  }
   
}

const App = () => {
  const [number, setNumber] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')
  const [state, dispatch] = useReducer((x) => x + 1, 0)

  useEffect(() => {
    const initData = async() => {
      const data = await getNumberFromApi(setLoading, setError)
      console.log(data)
      setNumber(data)
    }
    setTimeout(() => {
      initData()
    }, 2500);
  }, [state])

  const handleClick  = async() => {
    dispatch()
  }
  
  return (
    <div className="App">
      <h1>
         Cripto Random
      </h1>
     
      { loading 
        ?  <h2>Cargando ... </h2>
        :  <h2>Número aleatorio : {number}</h2>
      }
      { error && <h2>Lo sewntimos hubo un error</h2> }

      <button
        type='button'
        onClick={handleClick}
        disabled = { loading }
      >
        { loading ? '...' : 'Nuevo número'}
      </button>
    </div>
  )
}

export default App
