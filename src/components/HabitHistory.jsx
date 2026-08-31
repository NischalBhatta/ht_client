const HabitHistory = () => {
  const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getPastDates = (count) => {
    const today = new Date();

    return Array.from({ length: count })
      .map((_, i) => {
        const d = new Date(today);
        d.setDate(today.getDate() - i);
        return d;
      })
      .reverse();
  };

  const getMonthLabel = (date) => {
    date.toLocaleString("default", { month: "short" });
  };
  return (
    <div>
      <div className="heatmap-container">
        <div className="heatmap-card">
          <h3>Read 20 minutes</h3>
          <div className="heatmap-wrapper">
            {/* Days Label */}
            <div className="weekdays-labels">
              {["", "Mon", "", "Wed", "", "Fri", ""].map((day) => (
                <div key={day} className="weekday-label">
                  {day}
                </div>
              ))}
            </div>

            {/* Month Label */}
            <div className="heatmap-grid">
              {Array.from({ length: 182 }).map((_, index) => (
                <div className="heatmap-square" key={index}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitHistory;
