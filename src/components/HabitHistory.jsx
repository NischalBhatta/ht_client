import React from "react";

const HabitHistory = ({ activeHabits }) => {
  const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const getPastDates = () => {
    const today = new Date();
    return Array.from({ length: 91 }).map((_, i) => {
      const d = new Date(today);
      d.setDate(today.getDate() - (90 - i));
      return d;
    });
  };

  const dates = getPastDates();

  const getMonthLabels = () => {
    const labels = [];
    let lastMonth = null;

    dates.forEach((date, index) => {
      const month = MONTHS[date.getMonth()];
      if (month !== lastMonth && index % 7 === 0) {
        labels.push({ month, weekIndex: Math.floor(index / 7) });
        lastMonth = month;
      }
    });
    return labels;
  };

  // ── Call the function to get the labels and total weeks ──
  const monthLabels = getMonthLabels();
  const totalWeeks = Math.ceil(dates.length / 7);

  return (
    <div className="row g-3">
      {activeHabits.map((item, i) => (
        <div className="col-12 col-md-6" key={i}>
          <div className="heatmap-card">
            <h3>{item.name}</h3>

            {/* ── Month Labels Row — sits above the grid ── */}
            <div className="month-labels-row">
              {Array.from({ length: totalWeeks }).map((_, weekIdx) => {
                const label = monthLabels.find((m) => m.weekIndex === weekIdx);
                return (
                  <div key={weekIdx} className="month-label-cell">
                    {label ? label.month : ""}
                  </div>
                );
              })}
            </div>

            <div className="heatmap-wrapper">
              {/* Days Label */}
              <div className="weekday-labels">
                {["", "Mon", "", "Wed", "", "Fri", ""].map((day, idx) => (
                  <div key={idx} className="weekday-label">
                    {day}
                  </div>
                ))}
              </div>

              {/* Heatmap Grid */}
              <div className="heatmap-grid">
                {dates.map((date, index) => {
                  const dateStr = date.toISOString().split("T")[0];
                  const isCompleted = item.completions?.includes(dateStr);

                  return (
                    <div
                      key={index}
                      className="heatmap-square"
                      title={dateStr}
                      style={{
                        backgroundColor: isCompleted ? item.colour : "#e3e9e3",
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HabitHistory;
