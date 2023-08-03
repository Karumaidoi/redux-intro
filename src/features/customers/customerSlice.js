import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  nationalID: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(firstName, nationalID) {
        return { payload: { firstName, nationalID } };
      },
      reducer(state, action) {
        state.firstName = action.payload.firstName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = new Date().toISOString();
      },
    },
    updateCustomer(state, action) {
      state.firstName = action.payload;
    },
  },
});

export const { createCustomer, updateCustomer } = customerSlice.actions;

export default customerSlice.reducer;

/*
export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        firstName: action.payload.firstName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload };

    default:
      return state;
  }
}

export function createCustomer(firstName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { firstName, nationalID, createdAt: new Date().toISOString() },
  };
}

export function updateName(fullName) {
  return { type: "account/updateName", payload: fullName };
}

*/
