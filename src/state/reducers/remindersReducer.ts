import { ActionType } from '../action-types';
import { Action, Reminder } from '../actions';

interface ReminderState {
  id: number;
  text: string;
  dueDate: string;
}

const reminder = (action: any) => {
  return {
    id: Math.random(),
    text: action.text,
    dueDate: action.date,
  };
};

const removeById = (state: any, id: number) => {
  return state.filter((reminder: ReminderState) => reminder.id !== id);
};

const reducer = (state: Reminder[] = [], action: Action) => {
  let reminders = null;

  let cookie = localStorage.getItem('reminders');
  if (cookie) {
    let data: ReminderState[] = JSON.parse(cookie);
    state = data;
  }

  switch (action.type) {
    case ActionType.ADD_REMINDER:
      reminders = [...state, reminder(action)];
      localStorage.setItem('reminders', JSON.stringify(reminders));
      return reminders;
    case ActionType.DELETE_REMINDER:
      reminders = removeById(state, action.id);
      localStorage.setItem('reminders', JSON.stringify(reminders));
      return reminders;
    case ActionType.CLEAR_REMINDERS:
      localStorage.clear();
      return [];

    default:
      return state;
  }
};

export default reducer;
