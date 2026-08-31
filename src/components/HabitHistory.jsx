const HabitHistory = () => {
  return (
    <div className="habit-history">
      <div className="heatmap-container">
        <div className="heatmap-card">
          <h3>Read 20 minutes</h3>

          <div className="heatmap-grid">
            {Array.from({ length: 182 }).map((_, index) => (
              <div className="heatmap-square" key={index}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitHistory;
