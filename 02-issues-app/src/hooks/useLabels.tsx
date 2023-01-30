import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { githubApi } from '../../api/githubApi';
import { Label } from "../issues/interfaces/githubLabels";
import { sleep } from '../helpers/slepp';

const dataMock:Label[] = [{"id":791921801,"node_id":"MDU6TGFiZWw3OTE5MjE4MDE=","url":"https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F","name":"❤️","color":"ffffff","default":false,"description":null},{"id":69105383,"node_id":"MDU6TGFiZWw2OTEwNTM4Mw==","url":"https://api.github.com/repos/facebook/react/labels/Browser:%20IE","name":"Browser: IE","color":"c7def8","default":false,"description":null},{"id":69105358,"node_id":"MDU6TGFiZWw2OTEwNTM1OA==","url":"https://api.github.com/repos/facebook/react/labels/Browser:%20Safari","name":"Browser: Safari","color":"c7def8","default":false,"description":null},{"id":196858374,"node_id":"MDU6TGFiZWwxOTY4NTgzNzQ=","url":"https://api.github.com/repos/facebook/react/labels/CLA%20Signed","name":"CLA Signed","color":"e7e7e7","default":false,"description":null},{"id":71502270,"node_id":"MDU6TGFiZWw3MTUwMjI3MA==","url":"https://api.github.com/repos/facebook/react/labels/Component:%20Build%20Infrastructure","name":"Component: Build Infrastructure","color":"f9d0c4","default":false,"description":null},{"id":739777675,"node_id":"MDU6TGFiZWw3Mzk3Nzc2NzU=","url":"https://api.github.com/repos/facebook/react/labels/Component:%20Component%20API","name":"Component: Component API","color":"d4c5f9","default":false,"description":null},{"id":1205087127,"node_id":"MDU6TGFiZWwxMjA1MDg3MTI3","url":"https://api.github.com/repos/facebook/react/labels/Component:%20Concurrent%20Features","name":"Component: Concurrent Features","color":"ffccd3","default":false,"description":""},{"id":139653724,"node_id":"MDU6TGFiZWwxMzk2NTM3MjQ=","url":"https://api.github.com/repos/facebook/react/labels/Component:%20Core%20Utilities","name":"Component: Core Utilities","color":"c5def5","default":false,"description":null},{"id":710573595,"node_id":"MDU6TGFiZWw3MTA1NzM1OTU=","url":"https://api.github.com/repos/facebook/react/labels/Component:%20Developer%20Tools","name":"Component: Developer Tools","color":"fbca04","default":false,"description":null},{"id":127893911,"node_id":"MDU6TGFiZWwxMjc4OTM5MTE=","url":"https://api.github.com/repos/facebook/react/labels/Component:%20DOM","name":"Component: DOM","color":"fef2c0","default":false,"description":null},{"id":1249821345,"node_id":"MDU6TGFiZWwxMjQ5ODIxMzQ1","url":"https://api.github.com/repos/facebook/react/labels/Component:%20ESLint%20Rules","name":"Component: ESLint Rules","color":"f7afdb","default":false,"description":""},{"id":1649755876,"node_id":"MDU6TGFiZWwxNjQ5NzU1ODc2","url":"https://api.github.com/repos/facebook/react/labels/Component:%20Fast%20Refresh","name":"Component: Fast Refresh","color":"473bcc","default":false,"description":""}]

export const getLabelsFromAPi = async():Promise<Label[]> => {
  await sleep(2)
  const res = await githubApi.get<Label[]>('/labels',{
    headers: {
      Authorization: null
    }
    
  })
      // const resp = await fetch('https://api.github.com/repos/facebook/react/labels')
      // const data = await resp.json()
      const { data } = res
      console.log({data})
      return data
  }
  
export const useLabels = (): { labelsQuery: UseQueryResult<Label[], unknown>;} =>{


    const labelsQuery = useQuery(
        ['queryLabels'],
        getLabelsFromAPi,
        {
         staleTime: 1000 * 60 * 60 * 1,
         // initialData: dataMock , // funciona sin el staleTime, no usa data fresh
         placeholderData: dataMock
        }
      )
    return {
        labelsQuery
    }
}