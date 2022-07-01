import { RootState } from "../store"

const getTheme = (state: RootState) => state.app.theme
const getScrollable = (state: RootState) => state.app.scrollable
const getPosts = (state: RootState) => state.posts.posts
const getLoading = (state: RootState) => state.posts.loading


export {
  getTheme,
  getScrollable,
  getPosts,
  getLoading,
}
