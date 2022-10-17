import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navigation from './Components/Navigation/Navigation'
import Footer from './Components/Footer/Footer'
import Homepage from './Pages/Homepage/Homepage'
import Aboutpage from './Pages/Aboutpage/Aboutpage'
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/about' element={<Aboutpage/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
