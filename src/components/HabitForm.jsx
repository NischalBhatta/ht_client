import { useState } from "react";

const HabitForm = ({ addHabit, closeForm }) => {
  const [habitName, setHabitName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!habitName.trim()) {
      return;
    }

    addHabit(habitName);

    setHabitName("");
  };

  return (
    <div className="modalBackground">
      <div className="habitModal">
        <div className="modalHeader">
          <h2>Add New Habit</h2>

          <button className="closeButton" onClick={closeForm}>
            X
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Habit Name</label>

          <input
            type="text"
            placeholder="Example: Read 20 minutes"
            value={habitName}
            onChange={(e) => setHabitName(e.target.value)}
          />

          <div className="modalButtons">
            <button type="button" className="cancelButton" onClick={closeForm}>
              Cancel
            </button>

            <button type="submit" className="submitButton">
              Add Habit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HabitForm;
