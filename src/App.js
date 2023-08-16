import './App.css';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import ResetPassword from './components/ResetPassword';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:token" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
