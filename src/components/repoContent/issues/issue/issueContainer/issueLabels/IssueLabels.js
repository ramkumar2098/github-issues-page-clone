import React from 'react';
import { labelMenuItems } from 'data/labelMenuItems';
import style from './IssueLabels.module.css';

function IssueLabels({ issue, displayTitle, styles }) {
  const { issueLabels } = issue;

  return (
    <div className={style.issueLabels}>
      {issueLabels.map(issueLabel => {
        return (
          <a
            href="#"
            key={issueLabel}
            title={(() => {
              const { description, label } = labelMenuItems.find(
                ({ label }) => label === issueLabel
              );
              return displayTitle ? description || label : description;
            })()}
            className={style.issueLabel}
            style={{
              ...(() =>
                labelMenuItems.find(({ label }) => label === issueLabel))(),
              ...styles,
            }}
          >
            {issueLabel}
          </a>
        );
      })}
    </div>
  );
}

export default IssueLabels;
