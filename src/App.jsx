import "./App.css";
import HabitList from "./components/HabitList.jsx";
import HabitForm from "./components/HabitForm.jsx";

import HabitHistory from "./components/HabitHistory.jsx";

import React, { useState } from "react";

const generateDummyCollections = (createdAt) => {
  const completions = [];
  const start = new Date(createdAt); // 1 august 2026
  const today = new Date(); // 28 august 2026
  const current = new Date(start);

  while (current <= today) {
    if (Math.random() > 0.4) {
      completions.push(current.toISOString().split("T"), [0]);
    }
    current.setDate(current.getDate() + 1);
  }

  return completions;
};

function App() {
  const [habitList, setHabitList] = useState([
    {
      _id: "1",
      name: "Drink 2L of water",
      colour: "#718b73",
      isArchived: false,
      isCompleted: true,
      createdAt: "2026-08-01",
      completions: generateDummyCollections("2026-08-01"),
    },
    {
      _id: "2",
      name: "Read 20 minutes",
      colour: "#6b8cae",
      isArchived: false,
      isCompleted: false,
      createdAt: "2026-08-01",
      completions: generateDummyCollections("2026-08-01"),
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

  const addHabit = (habitName, color) => {
    console.log("habitName:", habitName);
    console.log("color:", color);
    const newHabit = {
      _id: Date.now().toString(),
      name: habitName,
      color: color,
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
            handleDeleteButton={handleDeleteButton}
          />

          {/* Habit form */}
          {showForm && (
            <HabitForm
              addHabit={addHabit}
              closeForm={() => setShowForm(false)}
            />
          )}

          {/* Hbait History Section */}
          <div className="heatmap-section">
            <h5 className="habit-history">Habit History</h5>
            <div className="row g-3">
              {activeHabits.map((habit) => (
                <div className="col-md-6" key={habit._id}>
                  <HabitHistory />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
