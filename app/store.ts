import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import quizReducer from '../features/quiz/quizSlice';
import userProfileReducer from '../features/userProfile/userProfileSlice'

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    userProfile: userProfileReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;