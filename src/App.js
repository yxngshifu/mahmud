
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Why from './components/Why';
import Hod from './components/Hod';
import Practice from './components/Practice';
import Insights from './components/Insights';
import Contact from './components/Contact';
import OurTalents from './components/OurTalents';
import Amina from './Pages/Amina';
import Mahmud from './Pages/Mahmud';
import Okechukwu from './Pages/Okechukwu';
import Aliu from './Pages/Aliu';
import Efut from './Pages/Efut';
import SeniorCounsel from './components/SeniorCounsel';
import Counsel from './components/Counsel';
import Diversity from './Pages/Diversity'
import Internship from './Pages/Internship'
import Ftemployment from './Pages/Ftemployment'


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='about' element={<About/>}/>
        <Route path='why' element={<Why/>}/>
        <Route path='hod' element={<Hod/>}/>
        <Route path='practice' element={<Practice/>}/>
        <Route path='insights' element={<Insights/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='ourtalents' element={<OurTalents/>}/>
        <Route path='mahmud' element={<Mahmud/>}/>
        <Route path='okechukwu' element={<Okechukwu/>}/>
        <Route path='amina'  element={<Amina/>}/>
        <Route path='efut'  element={<Efut/>}/>
        <Route path='aliu'  element={<Aliu/>}/>
        <Route path='seniorcounsel'  element={<SeniorCounsel/>}/>
        <Route path='counsel' element={<Counsel/>}/>
        <Route path='diversity' element={<Diversity/>}/>
        <Route path='internship' element={<Internship/>}/>
        <Route path='ftemployment' element={<Ftemployment/>}/>
      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
