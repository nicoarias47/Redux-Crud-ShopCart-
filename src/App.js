import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShoppingContainer from "./components/ShoppingContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="bg-zinc-900 text-white">
      <Router>
        <NavBar />
        <div className="min-h-screen flex items-center justify-center">
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/create-task" element={<TaskForm />} />
            <Route path="/edit-task/:id" element={<TaskForm />} />
            <Route path="/shopping" element={<ShoppingContainer />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
