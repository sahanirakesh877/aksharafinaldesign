import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./HeroService";

export const fetchHeroPhoto = createAsyncThunk(
  "herophoto/fetch_hero_photo",
  async (_, { rejectWithValue }) => {
    try {
      const response = await service.getHeroPhoto();

      if(response.data.success){
        return response.data;

      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const heroPhotoSlice = createSlice({
  name: "herophoto",
  initialState: {
    herophoto: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeroPhoto.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHeroPhoto.fulfilled, (state, action) => {
        state.loading = false;
        state.herophoto = action.payload;
      })
      .addCase(fetchHeroPhoto.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to fetch hero photos";
      });
  },
});

export default heroPhotoSlice.reducer;
