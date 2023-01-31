import { useState } from 'react';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { useIssues } from '../../hooks/useIssues';
import LoadingIcon from '../../shared/components/LoadingIcon';
import { State } from '../interfaces/githubIssues';



export const ListView = () => {
  
  const [selectedLabels, setSelectedLabels] = useState<string[]>([])
  
  const [state, setState] = useState<State>()
  
  const {issuesQuery} = useIssues({state, labels: selectedLabels})
  //console.log(issuesQuery.data)

  const onChangeLabel = (labelName:string): void => {
    ( selectedLabels.includes(labelName)
      ?  setSelectedLabels( selectedLabels.filter(item => item !== labelName) )
      :  setSelectedLabels([...selectedLabels, labelName])
    )
  }

  return (
    <div className="row mt-5">
      
      <div className="col-8">
        {
          issuesQuery.isLoading
          ? <LoadingIcon />
          : <IssueList 
                state= { state }
                issues= {issuesQuery.data!} 
                onStateChange = { (newState) => setState(newState) }
            />          
        }
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
