import { useInfiniteQuery,  UseInfiniteQueryResult } from '@tanstack/react-query';
import { githubApi } from '../../api/githubApi';
import { sleep } from '../helpers/slepp';
import { Issue, State, Type, AuthorAssociation } from '../issues/interfaces/githubIssues';


interface UseIssuesProps {
    state?: State
    labels?: string[]
    page?: number;
}


interface GetIssuesProps {
    pageParam?: number;
    queryKey: (string | UseIssuesProps)[]
}

export const getIssuesFromAPi = async({ pageParam = 1 , queryKey }: GetIssuesProps):Promise<Issue[]> => {

    const [,, args ] = queryKey
    const { state, labels } = args as UseIssuesProps

    const params = new URLSearchParams()


    if (state) {
        params.append('state', state)
    }
    if (!!labels && labels.length > 0 ) {
        const labelsString = labels.join(',')
        params.append('labels', labelsString )
    }
    console.log(pageParam)
    params.append('page', pageParam.toString())
    params.append('per_page', '5')

    await sleep(2)
    const res = await githubApi.get<Issue[]>('/issues',{
        params
    //   headers: {
    //     Authorization: null
    //   }
      
    })
        const { data } = res
        console.log({data})
        return data
    }


export const useIssuesInfinite = ({state,  labels}:UseIssuesProps): {
    issuesQuery: UseInfiniteQueryResult<Issue[], unknown>;
} => {

    

    const issuesQuery = useInfiniteQuery(
        ['queryIssues', 'infinite', {state, labels }],
        (data) => getIssuesFromAPi( data ),
        {
            getNextPageParam: ( lastPage, pages ) => {
                if(lastPage.length === 0){ return }

                return pages.length + 1
            },
            // getPreviousPageParam: (lastPage, pages) => {

            // }
            // staleTime: 1000 * 60 * 60 * 1,
            // initialData: dataMock , // funciona sin el staleTime, no usa data fresh
            // placeholderData: dataMock
            // refetchInterval : 1000
        }
        )


        return {
            // Properties
            issuesQuery
            // Getter
           
            // Methods
           
        }
}



// ttps://api.github.com/repos/facebook/react/issues