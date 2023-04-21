import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState("");

  const handleInputChange = (e) => {
    setNewReminder(e.target.value);
  };

  const handleAddReminder = () => {
    if (newReminder.trim()) {
      setReminders([...reminders, newReminder]);
      setNewReminder("");
    }
  };

  const handleDeleteReminder = (reminder) => {
    setReminders(reminders.filter((r) => r !== reminder));
  };

  return (
    <div className="container">
      <h1>Reminder App</h1>
      <div className="input-container">
        <input
          type="text"
          value={newReminder}
          onChange={handleInputChange}
          placeholder="Enter a reminder"
        />
        <button className="add-btn" onClick={handleAddReminder}>
          Add Reminder
        </button>
      </div>
      {reminders.length > 0 ? (
        <ul className="reminders-list">
          {reminders.map((reminder, index) => (
            <li key={index}>
              {reminder}
              <button className="delete-btn" onClick={() => handleDeleteReminder(reminder)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-reminders">No reminders</p>
      )}
    </div>
  );
};

export default App;
