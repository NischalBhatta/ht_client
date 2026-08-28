import "./App.css";
import HabitList from "./components/HabitList.jsx";
import HabitForm from "./components/HabitForm.jsx";
// import Streak from "./components/Streak.jsx";

import React, { useState } from "react";

function App() {
  const [habitList, setHabitList] = useState([
    {
      _id: "1",
      name: "Drink 2L of water",
      colour: "#718b73",
      isArchived: false,
      isCompleted: true,
    },
    {
      _id: "2",
      name: "Read 20 minutes",
      colour: "#6b8cae",
      isArchived: false,
      isCompleted: false,
    },
    {
      _id: "3",
      name: "Drink 2L of water",
      colour: "#718b73",
      isArchived: true,
      isCompleted: true,
    },
    {
      _id: "4",
      name: "Read 20 minutes",
      colour: "#6b8cae",
      isArchived: true,
      isCompleted: false,
    },
  ]);

  const activeHabits = habitList.filter((habit) => !habit.isArchived);
  const archivedHabits = habitList.filter((habit) => habit.isArchived);

  const [showForm, setShowForm] = useState(false);

  const handleArchiveToggle = (id) => {
    setHabitList((currentList) =>
      currentList.map((habit) =>
        habit._id === id
          ? {
              ...habit,
              isArchived: !habit.isArchived,
            }
          : habit,
      ),
    );
  };

  const handleDeleteButton = (id) => {
    if (window.confirm("Are you sure you want to delete this habit?")) {
      setHabitList((currentList) =>
        currentList.filter((habit) => habit._id !== id),
      );
    }
  };

  const addHabit = (habitName) => {
    const newHabit = {
      _id: Date.now().toString(),
      name: habitName,
      isArchived: false,
      completed: false,
    };

    setHabitList([...habitList, newHabit]);

    setShowForm(false);
  };

  const handleToggleComplete = (id) => {
    setHabitList((currentList) =>
      currentList.map((habit) =>
        habit._id === id
          ? { ...habit, isCompleted: !habit.isCompleted }
          : habit,
      ),
    );
  };
  return (
    <>
      <div className="wrapper">
        <div className="container p-2">
          {/* Banner */}
          <header className="banner">
            <div className="app-title">
              <h2>Habit Tracker</h2>
            </div>
            <div className="add-habit">
              <button
                className="add-habit-btn"
                onClick={() => setShowForm(true)}
              >
                ADD HABIT
              </button>
            </div>
          </header>

          {/* Habit List */}
          <HabitList
            activeHabits={activeHabits}
            archivedHabits={archivedHabits}
            handleArchiveToggle={handleArchiveToggle}
            handleToggleComplete={handleToggleComplete}
          />

          {/* Habit form */}
          {showForm && (
            <HabitForm
              addHabit={addHabit}
              closeForm={() => setShowForm(false)}
            />
          )}

          {/* Habit Streak  */}
          {/* <Streak /> */}
        </div>
      </div>
    </>
  );
}

export default App;
