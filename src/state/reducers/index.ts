import { combineReducers } from 'redux';
import remindersReducer from './remindersReducer';

const reducers = combineReducers({ reminders: remindersReducer });

export default reducers;

export type RootState = ReturnType<typeof reducers>;
