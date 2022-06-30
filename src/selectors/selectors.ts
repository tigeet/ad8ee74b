import { RootState } from "../store"

const getTheme = (state: RootState) => state.app.theme
const getScrollable = (state: RootState) => state.app.scrollable



export {
  getTheme,
  getScrollable,
}
