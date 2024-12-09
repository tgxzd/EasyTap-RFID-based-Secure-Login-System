
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-center">
      <ul className="flex space-x-4">

        <li>
          <Link to="/" className="text-white">Home</Link>
        </li>
      
        <li>
          <Link to="/testFetch" className="text-white">Test Fetch Data</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;