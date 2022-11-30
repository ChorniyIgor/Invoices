import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { key: "all", title: "All", checked: true },
  { key: "paid", title: "Paid", checked: true },
  { key: "pending", title: "Pending", checked: true },
  { key: "draft", title: "Draft", checked: true },
];

const filterSlice = createSlice({
  name: "@@filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { value, key } = action.payload;

      if (key === "all" && value) {
        return state.map((item) => ({ ...item, checked: true }));
      }

      if (key === "all" && !value) {
        return state.map((item) => ({ ...item, checked: false }));
      }

      const option = state.find((item) => item.key === key);
      option.checked = value;

      const isAllChecked = state.every((item) =>
        item.key !== "all" ? item.checked : true
      );
      if (isAllChecked) {
        const option = state.find((item) => item.key === "all");
        option.checked = true;
      }
      if (!isAllChecked) {
        const option = state.find((item) => item.key === "all");
        option.checked = false;
      }
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice;
