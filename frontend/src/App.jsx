import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Registration from "./pages/Registration";
import Home from "./pages/Home";
import WelcomeScreen from "./components/WelcomeScreen";

function App() {
  return (
    <Router>
      <div>
        <WelcomeScreen/>
        <Routes>
          <Route path="/" element={<Navigate to="/register" />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/home" element={
            <>
              <Navbar />
              <Home />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
