import { Route, Routes } from 'react-router-dom';
import DashBoard from './components/Dashboard';
import Task from './components/Task';
function App() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/task/:id" element={<Task />} />
    </Routes>
  );
}

export default App;
