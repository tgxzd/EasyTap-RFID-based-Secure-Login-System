import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import TestFetchData from "./pages/TestFetchData";
import Home from "./pages/Home";
import WelcomeScreen from "./components/WelcomeScreen";

function App() {
  return (
    <Router>
      <div>
        <WelcomeScreen/> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testFetch" element={<TestFetchData />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
