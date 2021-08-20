import { ActionType } from '../action-types';

export interface Reminder {
  id: number;
  text: string;
  dueDate: string;
}

interface AddReminderAction {
  type: ActionType.ADD_REMINDER;
  text: string;
  date: string;
}

interface DeleteReminderAction {
  type: ActionType.DELETE_REMINDER;
  id: number;
}

interface ClearReminders {
  type: ActionType.CLEAR_REMINDERS;
}

export type Action = AddReminderAction | DeleteReminderAction | ClearReminders;
