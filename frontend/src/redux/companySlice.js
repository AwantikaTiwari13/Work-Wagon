import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "company",
  initialState: {
    companies: [],
    singleCompany: null,
    loading: false,
    error: null,
    searchCompanyByText: "",
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCompanies: (state, action) => {
      state.companies = action.payload;
    },
    setSingleCompany: (state, action) => {
      state.singleCompany = action.payload;
    },
    setSearchCompanyByText: (state, action) => {
      state.searchCompanyByText = action.payload;
    },
  },
});

export const {
  setLoading,
  setCompanies,
  setSingleCompany,
  setSearchCompanyByText,
} = companySlice.actions;
export default companySlice.reducer;
