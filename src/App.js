import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import ResetPassword from './components/ResetPassword';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
