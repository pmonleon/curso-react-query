import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { githubApi } from '../../api/githubApi';
import { sleep } from '../helpers/slepp';
import { Issue } from '../issues/interfaces/githubIssues';

export const getIssueFromAPi = async(issueNumber:number):Promise<Issue> => {
    await sleep(2)
    const res = await githubApi.get<Issue>(`/issues/${issueNumber}`,{
    //   headers: {
    //     Authorization: null
    //   }
      
    })
        const { data } = res
        return data
    }

export const getIssueComments = async(issueNumber:number):Promise<Issue[]> => {
       await sleep(2)
       const res = await githubApi.get<Issue[]>(`/issues/${issueNumber}/comments`,{
       //   headers: {
       //     Authorization: null
       //   }
         
       })
           const { data } = res
           return data
    }


export const useIssue= (issueNumber:number): {
    issueQuery: UseQueryResult<Issue, unknown>;
    issueCommentsQuery: UseQueryResult<Issue[], unknown>;
}  => {
    
        const issueQuery = useQuery(
            ['queryIssue', issueNumber],
             () => getIssueFromAPi(issueNumber),
            {
             // staleTime: 1000 * 60 * 60 * 1,
             onSuccess: (data) => {
                console.log(data)
             }
            }
          )
        const issueCommentsQuery = useQuery(
            ['queryIssue', issueNumber, 'comments'],
              () =>  getIssueComments(issueQuery.data?.number!),
            {
             // staleTime: 1000 * 60 * 60 * 1,
             enabled: !!issueQuery.data ,
             onSuccess: (data) => {
              console.log(data)
             }
            }
          )
        return {
            issueQuery,
            issueCommentsQuery
        }
}



// ttps://api.github.com/repos/facebook/react/issues