import { Route, Routes } from 'react-router-dom';
import DashBoard from './components/Dashboard';
import Task from './components/Task';
import ModalComp from './components/Modal';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/task/:id" element={<Task />} />
      </Routes>
      <ModalComp />
    </div>
  );
}

export default App;
