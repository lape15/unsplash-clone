import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import.meta.env.VITE_ACCESS_KEY;

interface MyData {
  // ...
}

type Photo = {
  id?: string;
  user: {
    name: string;
    location: string;
  };
  urls: {
    regular: string;
  };
  links: {};
  color: string;
};

export const fetchPhotos = createAsyncThunk("photos/fetchPhtos", async () => {
  const response: any = await fetch(
    `https://api.unsplash.com/photos/?client_id=${
      import.meta.env.VITE_ACCESS_KEY
    }`
  );
  // console.log({ response }, response.json());
  return await response.json();
});

interface PhotosState {
  photos: Photo[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState = {
  photos: [],
  loading: "idle",
} as PhotosState;

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchPhotos.pending, (state, action) => {
      // Add user to the state array
      state.loading = "pending";
    }),
      builder.addCase(fetchPhotos.fulfilled, (state, action) => {
        // Add user to the state array
        state.loading = "succeeded";
        state.photos = action.payload;
      });
  },
});

export default photosSlice.reducer;
