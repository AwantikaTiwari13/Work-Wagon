import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    allJobs: [],
    loading: false,
    error: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setAllJobs: (state, action) => {
      state.allJobs = action.payload;
    },
  },
});

export const { setLoading, setAllJobs } = jobSlice.actions;
export default jobSlice.reducer;
