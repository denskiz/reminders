import React, { useState } from "react";
import { connect } from "react-redux";
import { addReminder, deleteReminder, clearReminders } from "../actions";
// import actions from "../actions";
import moment from "moment";

const App = (props) => {
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("");

  function addReminder() {
    props.addReminder(text, dueDate);
    setText("");
  }

  function renderReminders() {
    const { reminders } = props;
    return (
      <ul className="list-group col-sm-4">
        {reminders.map((reminder) => {
          return (
            <li key={reminder.id} className="list-group-item">
              <div className="list-item">
                <div>
                  {reminder.text}
                  <span class="badge bg-primary rounded-pill">
                    <em>{moment(new Date(reminder.dueDate)).fromNow()}</em>
                  </span>
                </div>
                <div></div>
              </div>
              <div
                id="other"
                value={text}
                className="list-item delete-button"
                onClick={() => props.deleteReminder(reminder.id)}
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
    <div className="App">
      <div className="title">Reminders</div>
      <br />
      <p>Add your reminders and the due date</p>
      <div className="form-inline reminder-form">
        <div className="form-group">
          <input
            className="form-control form-control-sm"
            placeholder="I have to..."
            onChange={(e) => setText(e.target.value)}
          />
          <input
            className="form-control form-control-sm"
            type="datetime-local"
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <button
          id="reminder"
          type="button"
          className="btn btn-outline-success"
          onClick={() => addReminder()}
        >
          Add Reminder
        </button>
      </div>
      {renderReminders()}
      <div
        id="delete"
        className="btn btn-outline-danger"
        onClick={() => props.clearReminders()}
      >
        Clear Reminders
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    reminders: state,
  };
};

export default connect(mapStateToProps, {
  addReminder,
  deleteReminder,
  clearReminders,
})(App);
