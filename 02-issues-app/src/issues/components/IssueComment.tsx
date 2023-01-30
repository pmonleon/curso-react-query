import { FC } from "react";
import ReactMarkdown from "react-markdown"
import { Navigate } from "react-router-dom";
import { Issue } from '../interfaces/githubIssues';

interface Props {
  issue?: Issue;
}

export const IssueComment: FC<Props> = ({ issue }) => {
   
  if (!issue) {
    return <Navigate to={'/issues/list'} />  
  }
  // console.log(issue)
  return (
    <div className="col-12">
        <div className="card border-white mt-2">
            <div className="card-header bg-dark">
                <img src={`${issue.user.avatar_url}`} alt="User Avatar" className="avatar" />
                <span className="mx-2">{issue.user.login}</span>
            </div>
            <div className="card-body text-dark">
                <ReactMarkdown>{ issue.body }</ReactMarkdown>
            </div>
        </div>
    </div>
  )
}
