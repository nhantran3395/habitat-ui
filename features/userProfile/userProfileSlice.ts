import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { IUserProfileState } from './interfaces';
import { ISelection } from '../../models/quiz'

const initialState: IUserProfileState = {
  userId: '',
  profileName: '',
  isPending: false,
  isError: false,
};

export const getUserId = createAsyncThunk('userProfile/getUserId', async (answers: ISelection[]) => {
  console.log(JSON.stringify(answers));

  const response = await fetch(`${process.env.NEXT_PUBLIC_APP_HABITAT_API}/answer/answerQuestions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(answers),
  });
  const data = await response.json();

  console.log('userId response', data);
  return data;
});

export const getProfileByUserId = createAsyncThunk('userProfile/getProfileByUserId', async (userId: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APP_HABITAT_API}/answer/userProfiles?userId=${userId}`,);
  const data = await response.json();
  console.log('profile response', data);
  return data;
});

export const userProfile = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder
      .addCase(getUserId.pending, state => {
        state.isPending = true;
        state.isError = false;
      })
      .addCase(getUserId.fulfilled, (state, { payload }) => {
        state.userId = payload.userId;
      })
      .addCase(getUserId.rejected, state => {
        state.isPending = false;
        state.isError = true;
      })
      .addCase(getProfileByUserId.pending, state => {
        state.isPending = true;
        state.isError = false;
      })
      .addCase(getProfileByUserId.fulfilled, (state, { payload }) => {
        state.isPending = false;
        state.profileName = payload.name;
      })
      .addCase(getProfileByUserId.rejected, state => {
        state.isPending = false;
        state.isError = true;
      });
  },
});

export const selectUserProfile = (state: RootState) => state.userProfile;

export default userProfile.reducer;