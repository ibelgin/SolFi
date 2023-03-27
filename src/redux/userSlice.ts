import {createSlice} from '@reduxjs/toolkit';

//userData = {
//     email: <String>,
//     familyName: <String>,
//     givenName: <String>,
//     id: <String>,
//     name: <String>,
//     photo: <Image URI>,
//   };

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
  },
});

export const {setUser} = userSlice.actions;
export default userSlice.reducer;
