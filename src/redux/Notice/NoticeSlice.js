import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./NoticeService";

export const fetchNotices = createAsyncThunk(
  "notices/fetch_notices",
  async (_, { rejectWithValue }) => {
    try {
      const response = await service.getNotice();
      if (response.data.success) {

        return response.data.notices.reverse();
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const noticeSlice = createSlice({
  name: "notices",
  initialState: {
    notices: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotices.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNotices.fulfilled, (state, action) => {
        state.loading = false;
        state.notices = action.payload;
      })
      .addCase(fetchNotices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to fetch notices";
      });
  },
});

export default noticeSlice.reducer;
