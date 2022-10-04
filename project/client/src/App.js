import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Homepage from './Components/Homepage/Homepage';
import LoginPortal from './Components/LoginPortal/LoginPortal';
import './App.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/login" element={<LoginPortal />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
