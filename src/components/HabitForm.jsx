import { useState } from "react";

const HabitForm = ({ addHabit, closeForm }) => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // console.log(JSON.stringify(form));

    addHabit(form);
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

        <form id="form" onSubmit={handleSubmit}>
          <label>Habit Name</label>

          <input
            type="text"
            placeholder="Example: Read 20 minutes"
            id="habit"
            name="name"
            required
            onChange={handleOnChange}
          />

          <label>Color</label>
          <input
            type="color"
            name="color"
            id="color"
            onChange={handleOnChange}
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
