import './App.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import moment from 'moment';

import { actionCreators } from '../state';
import { useTypedSelector } from '../hooks/useTypedSelector';

const App: React.FC = () => {
  const [reminder, setReminder] = useState('');
  const [date, setDate] = useState('');
  const dispatch = useDispatch();

  const reminders = useTypedSelector((state) => state.reminders);

  const onClick = () => {
    dispatch(actionCreators.addReminder(reminder, date));
    setReminder('');
    setDate('');
  };

  function renderReminders() {
    return (
      <ul className="list-group col-sm-4">
        {reminders.map((reminder: any) => {
          return (
            <li key={reminder.id} className="list-group-item">
              <div className="list-item">
                <div>
                  {reminder.text}
                  <span className="badge bg-primary rounded-pill">
                    {moment(new Date(reminder.dueDate)).fromNow()}
                  </span>
                </div>
                <div></div>
              </div>
              <div
                id="other"
                className="list-item delete-button"
                onClick={() => {
                  dispatch(actionCreators.deleteReminder(reminder.id));
                }}
              >
                &#x2715;
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <>
      <br />
      <br />
      <h1 id="title" className="text-center fst-italic">
        Reminders
      </h1>
      <p className="text-center">Add reminders and the due date:</p>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-4">
            <input
              value={reminder}
              className="form-control"
              onChange={(e) => {
                setReminder(e.target.value);
              }}
              placeholder="I have to..."
            />
            <input
              value={date}
              className="form-control"
              type="datetime-local"
              onChange={(e) => setDate(e.target.value)}
            />
            <button className="btn btn-success" onClick={onClick}>
              Add Reminder
            </button>
            <button
              className="btn btn-danger float-end"
              onClick={() => dispatch(actionCreators.clearReminders())}
            >
              Clear Reminders
            </button>
          </div>
        </div>
        <br />
        <div className="row justify-content-md-center">{renderReminders()}</div>
        <br />
        <div className="text-center">
          <a
            href="https://github.com/denskiz/reminders"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-success">Source code on GitHub</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default App;
