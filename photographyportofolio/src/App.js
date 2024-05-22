import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import AnimRoutes from './components/AnimRoutes';

import { BrowserRouter as Router } from 'react-router-dom';
import {motion} from 'framer-motion'

function App() {
  return (
    <>
     <Router>
      <AnimRoutes></AnimRoutes>
     </Router>
    </>
  );
}

export default App;
