import "./App.css";
import HabitList from "./components/HabitList.jsx";
// import Streak from "./components/Streak.jsx";

import React, { useState } from "react";

function App() {
  const [habitList, setHabitList] = useState([
    {
      _id: "1",
      name: "Drink 2L of water",
      type: "active",
      isCompleted: true,
    },
    {
      _id: "2",
      name: "Read 20 minutes",
      type: "active",
      isCompleted: false,
    },
    {
      _id: "3",
      name: "Drink 2L of water",
      type: "active",
      isCompleted: true,
    },
    {
      _id: "4",
      name: "Read 20 minutes",
      type: "active",
      isCompleted: false,
    },
  ]);

  const activeHabits = habitList.filter((habit) => habit.isCompleted);
  const archiveHabits = habitList.filter((habit) => !habit.isCompleted);

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
              <button className="add-habit-btn">ADD HABIT</button>
            </div>
          </header>

          {/* Habit List */}
          <HabitList
            activeHabits={activeHabits}
            archiveHabits={archiveHabits}
            handleArchiveToggle={handleArchiveToggle}
          />

          {/* Habit Streak  */}
          {/* <Streak /> */}
        </div>
      </div>
    </>
  );
}

export default App;
