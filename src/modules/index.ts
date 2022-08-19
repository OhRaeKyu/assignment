import { combineReducers } from '@reduxjs/toolkit';

import { accessReducer } from './accessModule';

const rootReducer = combineReducers({
  access: accessReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
