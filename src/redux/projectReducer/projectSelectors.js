import { createSelector } from 'reselect';

const ProjectState = state => state.projects;

export const SelectProjects = createSelector(
    [ProjectState],
    projects => projects.projects
)

export const SelectCurrentProject = createSelector(
    [ProjectState],
    projects => projects.currentProject
)

export const SelectCurrentProjectTasks = createSelector(
    [ProjectState],
    projects => projects.currentProject.tasks
)