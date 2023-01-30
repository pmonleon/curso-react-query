import { useState } from 'react';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { useIssues } from '../../hooks/useIssues';
import LoadingIcon from '../../shared/components/LoadingIcon';



export const ListView = () => {
  const {issuesQuery} = useIssues()
  //console.log(issuesQuery.data)

  const [selectedLabels, setSelectedLabels] = useState<string[]>([])

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
          : <IssueList issues= {issuesQuery.data!} />          
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
