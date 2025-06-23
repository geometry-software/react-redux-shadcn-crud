import type { RootState } from '../store';

export const selectPosts = (state: RootState) => state.posts.items;
export const selectLoading = (state: RootState) => state.posts.loading;
export const selectError = (state: RootState) => state.posts.error;
