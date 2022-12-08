import { combineReducers, configureStore } from "@reduxjs/toolkit";

import filterSlice from "./filter/filter-slice";
import invoiceFormSlice from "./invoiceForm/invoiceForm-slice";
import invoicesSlice from "./invoices/invoices-slice";
import themeSlice from "./theme/theme-slice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["theme", "invoices"],
};

const reducer = combineReducers({
  theme: themeSlice.reducer,
  invoices: invoicesSlice.reducer,
  filter: filterSlice.reducer,
  invoiceForm: invoiceFormSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
