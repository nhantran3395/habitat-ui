import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { IQuizState } from './interfaces';
import { mockGetQuestions } from './mockService';

const initialState: IQuizState = {
  questions: [],
  isPending: false,
  isError: false,
};

export const getAllQuestions = createAsyncThunk('quiz/questions', async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APP_HABITAT_API}/questions/getAllQuestions`,);
  const data = await response.json();
  // const data = await mockGetQuestions();
  return data;
});

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder
      .addCase(getAllQuestions.pending, state => {
        state.isPending = true;
      })
      .addCase(getAllQuestions.fulfilled, (state, { payload }) => {
        state.isPending = false;
        state.questions = payload;
      })
      .addCase(getAllQuestions.rejected, state => {
        state.isPending = false;
        state.isError = true;
      });
  },
});

export const selectAllQuestions = (state: RootState) => state.quiz;

export default quizSlice.reducer;