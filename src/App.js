
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Principal from './Pages/Principal';
import About from './components/About';
import Why from './components/Why';
import Talent from './components/Talent';
import Practice from './components/Practice';
import Insights from './components/Insights';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='about' element={<About/>}/>
        <Route path='why' element={<Why/>}/>
        <Route path='talent' element={<Talent/>}/>
        <Route path='practice' element={<Practice/>}/>
        <Route path='insights' element={<Insights/>}/>
        <Route path='contact' element={<Contact/>}/>
         <Route path="/principal" component={<Principal/>} />


      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
