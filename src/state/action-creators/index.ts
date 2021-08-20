import { ActionType } from '../action-types';
import { Action } from '../actions';

export const addReminder = (text: string, date: string) => {
  return {
    type: ActionType.ADD_REMINDER,
    text,
    date,
  };
};

export const deleteReminder = (id: number) => {
  return {
    type: ActionType.DELETE_REMINDER,
    id,
  };
};

export const clearReminders = () => {
  return {
    type: ActionType.CLEAR_REMINDERS,
  };
};
