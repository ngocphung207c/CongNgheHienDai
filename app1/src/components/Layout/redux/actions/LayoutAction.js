import * as types from './LayoutTypes';

export const startPageLoading = () => ({
    type: types.LAYOUT_START_LOADING,
});

export const stopPageLoading = () => ({
    type: types.LAYOUT_STOP_LOADING,
});