import { createSelector } from 'reselect'

const DisplayState = state => state.display;

export const SelectSidebarDisplay = createSelector(
    [DisplayState],
    display => display.sidebar
)