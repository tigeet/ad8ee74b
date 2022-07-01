import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "./appSlice";






interface PostObject {
  url: string;
  title: string;
  id: string;
}



interface PostState {
  posts: PostObject[],
  loading: boolean
}


const initialState: PostState = {
  posts: [],
  loading: false, 
}


const fetchData= async (): Promise<PostObject[]> => { 
  // убрать ссылку в глобальные переменные
  const response = await fetch(
    "https://raw.githubusercontent.com/tigeet/9p2z3384/main/db.json"
  );
  const json = await response.json();
  console.log(json);
  return json;
}

const fetchPosts = createAsyncThunk<PostObject[], undefined, {}>('PostObject/fetchData', () => fetchData())

const PostSlice = createSlice({
  name: 'PostObject',
  initialState,
  reducers: {

  },

  extraReducers: (builder) => {

    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.loading = false;
        console.log('fetching data rejected')
      })

  }, 
}) 


export { fetchPosts }
export default PostSlice.reducer

export type {PostObject}
