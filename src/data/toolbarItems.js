import UsersMenuList from '../components/repoContent/issuesToolbar/toolbarItem/selectMenu/usersMenuList/UsersMenuList';
import LabelMenuList from '../components/repoContent/issuesToolbar/toolbarItem/selectMenu/labelMenuList/LabelMenuList';
import ProjectsMenuList from '../components/repoContent/issuesToolbar/toolbarItem/selectMenu/projectsMenuList/ProjectsMenuList';
import MilestonesMenuList from '../components/repoContent/issuesToolbar/toolbarItem/selectMenu/milestonesMenuList/MilestonesMenuList';
import SortMenuList from '../components/repoContent/issuesToolbar/toolbarItem/selectMenu/sortMenuList/SortMenuList';

export const toolbarItems = [
  {
    textContent: 'Author',
    classNames: ['author', 'authorMenuModal'],
    header: 'Filter by author',
    placeholder: 'users',
    SelectMenuList: UsersMenuList,
  },
  {
    textContent: 'Label',
    classNames: ['label', 'labelMenuModal'],
    header: 'Filter by label',
    placeholder: 'labels',
    SelectMenuList: LabelMenuList,
  },
  {
    textContent: 'Projects',
    classNames: ['projects', 'projectsMenuModal'],
    header: 'Filter by project',
    placeholder: 'projects',
    SelectMenuList: ProjectsMenuList,
  },
  {
    textContent: 'Milestones',
    classNames: ['milestones', 'milestonesMenuModal'],
    header: 'Filter by milestone',
    placeholder: 'milestones',
    SelectMenuList: MilestonesMenuList,
  },
  {
    textContent: 'Assignee',
    classNames: ['assignee', 'assigneeMenuModal'],
    header: 'Filter by who’s assigned',
    placeholder: 'users',
    SelectMenuList: UsersMenuList,
  },
  {
    textContent: 'Sort',
    classNames: ['sort', 'sortMenuModal'],
    header: 'Sort by',
    placeholder: 'users',
    SelectMenuList: SortMenuList,
  },
];
