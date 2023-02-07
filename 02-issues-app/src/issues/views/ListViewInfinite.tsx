import { useState } from 'react';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import LoadingIcon from '../../shared/components/LoadingIcon';
import { State } from '../interfaces/githubIssues';
import { useIssuesInfinite } from '../../hooks';



export const ListViewInfinite = () => {
  
  const [selectedLabels, setSelectedLabels] = useState<string[]>([])
  
  const [state, setState] = useState<State>()
  
  const {issuesQuery} = useIssuesInfinite({state, labels: selectedLabels})
  //console.log(issuesQuery.data)

  const onChangeLabel = (labelName:string): void => {
    ( selectedLabels.includes(labelName)
      ?  setSelectedLabels( selectedLabels.filter(item => item !== labelName) )
      :  setSelectedLabels([...selectedLabels, labelName])
    )
  }

  if(!!issuesQuery.data!) console.log(issuesQuery.isLoading, issuesQuery.isFetching)

  return (
    <div className="row mt-5">
      
      <div className="col-8">
        {
          issuesQuery.isLoading
          ? <LoadingIcon />
          : <IssueList 
              state= { state }
              issues= {issuesQuery.data!.pages.flat() || [] } 
              onStateChange = { (newState) => setState(newState) }
            />        
        }
       {
          issuesQuery.isFetching && (!!issuesQuery.data && issuesQuery.data!.pages.length)
          ? <LoadingIcon />
          : <></>
       }
       <button 
          disabled={!issuesQuery.hasNextPage}
          onClick={() => issuesQuery.fetchNextPage() } 
          type='button' 
          className='btn btn-outline-primary mt-2'>
            Load more
       </button>
      </div>
      
      <div className="col-4">
        <LabelPicker 
          selectedLabels = { selectedLabels }
          onChange = { (labelName) => onChangeLabel(labelName) }
        />
      </div>
    </div>
  )
}
