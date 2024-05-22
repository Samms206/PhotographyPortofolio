import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import AnimRoutes from './components/AnimRoutes';

import { BrowserRouter as Router } from 'react-router-dom';
import {motion} from 'framer-motion'
import Header from './components/Header';

function App() {
  return (
    <>
     <Router>
      <Header/>
      <AnimRoutes/>
     </Router>
    </>
  );
}

export default App;
