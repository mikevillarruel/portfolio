import { Outlet } from 'react-router-dom';
import './App.css';
import { Nav } from './components/Nav';

function App() {
  return (
    <div className="root-container">
      <Nav />
      <div className="content-container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
