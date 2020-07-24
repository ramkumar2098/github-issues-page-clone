import React from 'react';
import IssuesIcon from '../../../issuesIcon/IssuesIcon';
import IssuePopoverTitle from './issuePopoverTitle/IssuePopoverTitle';
import IssuePopoverDescription from './issuePopoverDescription/IssuePopoverDescription';
import IssueLabels from '../../issueLabels/IssueLabels';
import style from './IssuePopoverBody.module.css';

function IssuePopoverBody(props) {
  return (
    <div className={style.issuePopoverBody}>
      <IssuesIcon padding="4px 8px 4px 0" />
      <div>
        <IssuePopoverTitle {...props} />
        <IssuePopoverDescription {...props} />
        <IssueLabels
          {...props}
          styles={{
            cursor: 'text',
            maxWidth: '135px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        />
      </div>
    </div>
  );
}

export default IssuePopoverBody;
