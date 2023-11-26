import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { peopleApi } from "./peopleApi";
import searchSlice from "./searchSlice";
import cardsSlice from "./cardsSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      search: searchSlice,
      cards: cardsSlice,
      [peopleApi.reducerPath]: peopleApi.reducer,
    },
    middleware: (gDM) => gDM().concat(peopleApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
