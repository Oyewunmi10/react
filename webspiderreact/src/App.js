
import {Routes,Route} from 'react-router'
import Home from './pages/Home/Home'
import Contact from './pages/contact/Contact';
import About from './pages/About/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    <footer/>
    </div>
  );
}

export default App;
