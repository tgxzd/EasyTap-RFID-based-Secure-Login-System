import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Registration from "./pages/Registration";

import WelcomeScreen from "./components/WelcomeScreen";

function App() {
  return (
    <Router>
      <div>
        <WelcomeScreen/>
        <Routes>
          
          <Route path="/register" element={<Registration />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
