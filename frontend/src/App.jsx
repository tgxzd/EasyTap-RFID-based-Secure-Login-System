
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import TestFetchData from "./pages/TestFetchData";
import Home from "./pages/Home"

function App() {
 

  return (
    
<Router>
   <div>
  <Navbar />
<Routes>

  <Route path='/' element={<Home/>} />
  <Route path='/testFetch' element={<TestFetchData/>} />
  

</Routes>

 
  </div>
</Router>

     


    
  );
}

export default App;