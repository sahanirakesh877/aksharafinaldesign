import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./ThreeDservice";

export const fetchThreeDPhoto = createAsyncThunk(
  "threeDphoto/fetch_threeD_photo",
  async (_, { rejectWithValue }) => {
    try {
      const response = await service.getGallery();
      if (response.data.success) {
        return response.data;
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const ThreeDPhotoSlice = createSlice({
  name: "threeDphoto",
  initialState: {
    threeDphoto: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchThreeDPhoto.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchThreeDPhoto.fulfilled, (state, action) => {
        state.loading = false;
        state.threeDphoto = action.payload;
      })
      .addCase(fetchThreeDPhoto.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to fetch 3D photos";
      });
  },
});

export default ThreeDPhotoSlice.reducer;
