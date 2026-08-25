import "./App.css";
import HabitList from "./components/habitList.jsx";
import ArchiveList from "./components/ArchiveList.jsx";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="container p-2">
          {/* Title */}
          <h2 className="text-center p-2">Habit Tracker</h2>
          <div className="row">
            {/* Habit List */}
            <div className="col-6">
              <HabitList />
            </div>
            <div className="col-6">
              {/* Archive List */}
              <ArchiveList />
            </div>
          </div>

          {/* Streak/HeatMap */}
        </div>
      </div>
    </>
  );
}

export default App;
