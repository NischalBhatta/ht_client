import "./App.css";
import HabitList from "./components/HabitList.jsx";
import HabitForm from "./components/HabitForm.jsx";

import HabitHistory from "./components/HabitHistory.jsx";

import React, { useState } from "react";
import { fetchAllHabits, postHabit } from "./helpers/habitAxiosHelper.js";
import { useRef } from "react";
import { useEffect } from "react";

const generateDummyCollections = (createdAt) => {
  const completions = [];
  const start = new Date(createdAt); // 1 august 2026
  const today = new Date(); // 28 august 2026
  const current = new Date(start);

  while (current <= today) {
    if (Math.random() > 0.4) {
      completions.push(current.toISOString().split("T")[0]);
    }
    current.setDate(current.getDate() + 1);
  }

  return completions;
};

function App() {
  const [habitList, setHabitList] = useState([]);

  const activeHabits = habitList.filter((habit) => !habit.isArchived);
  const archivedHabits = habitList.filter((habit) => habit.isArchived);

  const [showForm, setShowForm] = useState(false);

  const shouldFetchRef = useRef(true);

  useEffect(() => {
    shouldFetchRef.current && getAllHabit();
    shouldFetchRef.current = false;
  }, []);

  const getAllHabit = async () => {
    const response = await fetchAllHabits();
    console.log(response);
    response?.status === "success" && setHabitList(response.data);
  };

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

  const addHabit = async (taskObj) => {
    const newHabit = await postHabit(taskObj);

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

            <HabitHistory activeHabits={activeHabits} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
