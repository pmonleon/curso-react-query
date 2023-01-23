import { useQuery, UseQueryResult } from "@tanstack/react-query"

export const useRandomNumber = (): UseQueryResult<number, unknown> => {
    const getNumberFromApi = async():Promise<number> => {
        const resp = await fetch( 'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new', {
          method:'GET'
        })
        const numberString = await resp.text()
        // throw new Error("Los sentimos hubo un error");
        
        return Number(numberString)
       
    }
    const query = useQuery(
        // cache
        ['randomNumber'],
        // api call
        getNumberFromApi
      )
    return query
}