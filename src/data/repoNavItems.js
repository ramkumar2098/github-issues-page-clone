import CodeSVG from 'SVGs/CodeSVG';
import IssuesSVG from 'SVGs/IssuesSVG';
import PullRequestsSVG from 'SVGs/PullRequestsSVG';
import ActionsSVG from 'SVGs/ActionsSVG';
import ProjectsSVG from 'SVGs/ProjectsSVG';
import WikiSVG from 'SVGs/WikiSVG';
import SecuritySVG from 'SVGs/SecuritySVG';
import InsightsSVG from 'SVGs/InsightsSVG';

export const repoNavItems = [
  {
    Icon: CodeSVG,
    repoNavItem: 'Code',
  },
  {
    Icon: IssuesSVG,
    repoNavItem: 'Issues',
    count: 510,
  },
  {
    Icon: PullRequestsSVG,
    repoNavItem: 'Pull requests',
    count: 132,
  },
  {
    Icon: ActionsSVG,
    repoNavItem: 'Actions',
  },
  {
    Icon: ProjectsSVG,
    repoNavItem: 'Projects',
  },
  {
    Icon: WikiSVG,
    repoNavItem: 'Wiki',
  },

  {
    Icon: SecuritySVG,
    repoNavItem: 'Security',
  },

  {
    Icon: InsightsSVG,
    repoNavItem: 'Insights',
  },
];
