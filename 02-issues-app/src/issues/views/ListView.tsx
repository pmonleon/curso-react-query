import { useState } from 'react';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';



export const ListView = () => {
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
        <IssueList />
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
