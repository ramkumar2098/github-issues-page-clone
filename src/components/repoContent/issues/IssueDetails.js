import React from 'react';
import avatar from 'images/avatar.png';
import PullRequestsSVG from 'SVGs/PullRequestsSVG';
import CommentSVG from 'SVGs/CommentSVG';
import style from './IssueDetails.module.css';

function IssueDetails() {
  return (
    <div className={style.issueDetails}>
      <span className={style.issueDetail}>
        <span>
          <a href="#">
            <img src={avatar} />
          </a>
        </span>
      </span>
      <span className={style.issueDetail}>
        <span>
          <a href="#">
            <PullRequestsSVG />
            <span>1</span>
          </a>
        </span>
      </span>
      <span className={style.issueDetail}>
        <span>
          <a href="#">
            <CommentSVG />
            <span>15</span>
          </a>
        </span>
      </span>
    </div>
  );
}

export default IssueDetails;
