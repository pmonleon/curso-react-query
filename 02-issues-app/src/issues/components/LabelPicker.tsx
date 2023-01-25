import { FC } from 'react';
import { useLabels } from '../../hooks/useLabels';
import LoadingIcon from '../../shared/components/LoadingIcon';

interface Props {
  selectedLabels: string[]
  onChange: (labelName:string) => void
}

export const LabelPicker: FC<Props> = ({selectedLabels, onChange}) => {
 
  const { labelsQuery } = useLabels()

  if (labelsQuery.isLoading) {
    return <LoadingIcon />
  }

  return (
    <div>
        {
          labelsQuery.data?.map( item => (
            <span 
                className={`badge rounded-pill m-1 label-picker ${ selectedLabels.includes(item.name) ? 'label-active' : '' }`}
                style={{ border: `1px solid #${item.color}`, color: `#${item.color}` }}
                key={item.id}
                onClick={ () => onChange(item.name) }
            >
               {item.name}
            </span>
            
          ))
        }
        
    </div>
  )
}
