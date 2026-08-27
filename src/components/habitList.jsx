import React, { useState } from "react";

export const HabitList = ({
  activeHabits,
  archivedHabits,
  handleToggleComplete,
  handleArchiveToggle,
  handleDelete,
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
                    <button
                      type="checkbox"
                      className="handleToggleButton"
                      value={item._id}
                      id=""
                    ></button>
                  </td>
                  <td>{item.name}</td>
                  <td>
                    <button className="handleArchiveButton">Archive</button>
                  </td>
                  <td>
                    <button className="handleArchiveButton">Delete</button>
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
                    <button
                      type="checkbox"
                      className="handleToggleButton"
                      value={item._id}
                      id=""
                    ></button>
                  </td>
                  <td>{item.name}</td>
                  <td>
                    <button className="handleArchiveButton">Archive</button>
                  </td>
                  <td>
                    <button className="handleArchiveButton">Delete</button>
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
