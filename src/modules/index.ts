import { combineReducers } from '@reduxjs/toolkit';

import { accessReducer } from './accessModule';
import { referralReducer } from './referralModule';

const rootReducer = combineReducers({
  access: accessReducer,
  referral: referralReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
