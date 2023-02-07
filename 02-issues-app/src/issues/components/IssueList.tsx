import { InfiniteData } from '@tanstack/react-query';
import { FC, useMemo, useState } from 'react';
import { Issue } from '../interfaces';
import { State } from '../interfaces/githubIssues';
import { IssueItem } from './IssueItem';


interface Props {
    issues: Issue[]
    state: State | undefined
    onStateChange: (newState?: State) => void
}

export const IssueList:FC<Props> = ({issues, state, onStateChange}) => {

    
    const issuesList:Issue[] = useMemo(() =>{
        if (!state) {
            return issues
        }
       return issues.filter(issue => issue.state === state)
    }, [state, issues])
    

    const handleIssueState = (state?: State):void =>  {
        onStateChange(!!state ? state : undefined)
    }

    return (
        <div className="card border-white">
            <div className="card-header bg-dark">
                <ul className="nav nav-pills card-header-pills">
                    <li className="nav-item">
                        <a className={`nav-link ${ !state ? 'active' : ''}`}  onClick={() => handleIssueState()}>All</a>
                    </li>
                    <li className='nav-item'>
                        <a className={`nav-link ${ state === 'open' ? 'active' : ''}`} onClick={() => handleIssueState(State.Open)}>Open</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${ state === 'closed' ? 'active' : ''}`}  onClick={() => handleIssueState(State.Close)}>Closed</a>
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
