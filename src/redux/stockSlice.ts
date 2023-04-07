import {createSlice} from '@reduxjs/toolkit';

const stockSlice = createSlice({
  name: 'stock',
  initialState: [
    {
      image:
        'https://cdn.dribbble.com/users/115601/screenshots/921181/media/53c4041fea260324cb63f343cf3bc4eb.png?compress=1&resize=400x300&vertical=top',
      title: 'Maize',
      quantity: '120 Kg',
    },
    {
      image:
        'https://cdn.dribbble.com/userupload/4065779/file/original-5f15612da46cd196b76c6419b02c540c.png?compress=1&resize=1504x1128',
      title: "Watermelon's",
      quantity: '40 Kg',
    },
  ],
  reducers: {
    setStock: (state, action) => {
      return action.payload;
    },
  },
});

export const {setStock} = stockSlice.actions;
export default stockSlice.reducer;
