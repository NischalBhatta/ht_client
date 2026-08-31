import React, { useState } from "react";

export const HabitList = ({
  activeHabits,
  archivedHabits,
  handleToggleComplete,
  handleArchiveToggle,
  handleDeleteButton,
}) => {
  return (
    <div className="habit-list">
      {/* active habits */}
      <div className="active-table">
        <div className="table-header">
          <h2>Active Habits</h2>

          <hr />
        </div>
        <div>
          <table className="active-list">
            {activeHabits.map((item, i) => (
              <tbody>
                <tr key={item._id}>
                  <td>{i + 1}</td>
                  <td>
                    <input
                      type="checkbox"
                      className="handleToggleButton"
                      value={item._id}
                      id=""
                      onClick={() => handleToggleComplete(item._id)}
                    ></input>
                  </td>
                  <td>
                    <span
                      style={{
                        display: "inline-block",
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor: item.color || "#718b73",
                        marginRight: "8px",
                      }}
                    />
                    <span
                      style={{
                        textDecoration: item.isCompleted
                          ? "line-through"
                          : "none",
                        color: item.isCompleted ? "#8a968d" : "#455248",
                      }}
                    >
                      {item.name}
                    </span>
                  </td>
                  <td>
                    <button
                      className="handleArchiveButton"
                      onClick={() => handleArchiveToggle(item._id)}
                    >
                      Archive
                    </button>
                  </td>
                  <td>
                    <button
                      className="handleDeleteButton"
                      onClick={() => handleDeleteButton(item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                <tr></tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>

      {/* archived habits */}
      <div className="active-table">
        <div className="table-header">
          <h2>Archive Habits</h2>

          <hr />
        </div>
        <div>
          <table className="active-list">
            {archivedHabits.map((item, i) => (
              <tbody>
                <tr key={item._id}>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>
                    <button
                      className="handleArchiveButton"
                      onClick={() => handleArchiveToggle(item._id)}
                    >
                      UnArchive
                    </button>
                  </td>
                  <td>
                    <button
                      className="handleDeleteButton"
                      onClick={() => handleDeleteButton(item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                <tr></tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default HabitList;
