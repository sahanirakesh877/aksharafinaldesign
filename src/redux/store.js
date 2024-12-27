import { configureStore } from "@reduxjs/toolkit";
import noticeReducer from "./Notice/NoticeSlice";
import heroPhotoReducer from "./Hero/HeroSlice";
import threeDPhotoReducer from './ThreeDimage/ThreeDslice'

export const store = configureStore({
  reducer: {
    notices: noticeReducer,
    herophoto: heroPhotoReducer,
    threeDphoto:threeDPhotoReducer
  },
});
