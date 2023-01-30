import { FC, useMemo, useState } from 'react';
import { Issue } from '../interfaces';
import { IssueItem } from './IssueItem';


interface Props {
    issues: Issue[]
}

export const IssueList:FC<Props> = ({issues}) => {

    
    const [issueState, setIssueState] = useState<string>('all')

    const issuesList:Issue[] = useMemo(() =>{
        if (issueState === 'all') {
            return issues
        }
       return issues.filter(issue => issue.state === issueState)
    }, [issueState])
    

    const handleIssueState = (state:string):void =>  {
        setIssueState(state.toLowerCase())
    }

    return (
        <div className="card border-white">
            <div className="card-header bg-dark">
                <ul className="nav nav-pills card-header-pills">
                    <li className="nav-item">
                        <a className={`nav-link ${issueState === 'all' ? 'active' : ''}`}  onClick={() => handleIssueState('all')}>All</a>
                    </li>
                    <li className='nav-item'>
                        <a className={`nav-link ${issueState === 'open' ? 'active' : ''}`} onClick={() => handleIssueState('open')}>Open</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${issueState === 'closed' ? 'active' : ''}`}  onClick={() => handleIssueState('closed')}>Closed</a>
                    </li>
                </ul>
            </div>
            <div className="card-body text-dark">
                {
                    issuesList.map( issue => (
                        <IssueItem 
                            issue={issue}
                            key={issue.id} 
                        />
                    ))
                
                }                
            </div>
        </div>
    )
}
