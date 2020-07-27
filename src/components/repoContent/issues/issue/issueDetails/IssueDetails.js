import React from 'react';
import PullRequestsSVG from 'SVGs/PullRequestsSVG';
import CommentSVG from 'SVGs/CommentSVG';
import style from './IssueDetails.module.css';
import { toolTip } from 'components/toolTip/toolTip.module.css';

function IssueDetails({ issue }) {
  const {
    issueAssignedTo,
    issueAssignedToAvatar,
    pullRequests,
    comments,
  } = issue;

  return (
    <div className={style.issueDetails}>
      <span className={style.issueDetail}>
        {issueAssignedToAvatar && (
          <span>
            <a
              href="#"
              content={'Assigned to ' + issueAssignedTo}
              className={toolTip}
            >
              <img src={issueAssignedToAvatar} />
            </a>
          </span>
        )}
      </span>
      <span className={style.issueDetail}>
        {pullRequests && (
          <span>
            <a
              href="#"
              content={pullRequests + ' linked pull request'}
              className={toolTip}
            >
              <PullRequestsSVG />
              <span>{pullRequests}</span>
            </a>
          </span>
        )}
      </span>
      <span className={style.issueDetail}>
        {comments && (
          <span>
            <a href="#">
              <CommentSVG />
              <span>{comments}</span>
            </a>
          </span>
        )}
      </span>
    </div>
  );
}

export default IssueDetails;
