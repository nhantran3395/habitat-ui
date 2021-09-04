import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { IUserProfileState } from './interfaces';

const initialState: IUserProfileState = {
  profileName: '',
  isPending: false,
  isError: false,
};

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