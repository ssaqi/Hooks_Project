import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav'
import Counter from './Components/Counter';
import Sign from './Components/Sign';
import Useeffect from './Components/Useeffect';
import { Routes, Route} from 'react-router-dom';
import Resize from './Components/Resize';
import CounterByreducer from './Components/CounterByreducer';

function App() {
  return (
  
  <>
<Nav/>
<Routes>
   
   <Route exact path='/' element={<Counter/>}/>
   <Route exact path='/Counter' element={<Counter/>}/>
   <Route path='/sign' element={<Sign/>}/>
   <Route path='/Useeffect' element={<Useeffect/>}/>
   <Route path='/Resize' element={<Resize/>}/>
   <Route path='/CounterByreducer' element={<CounterByreducer/>}/>

  </Routes>


  </>
  
    );
}

export default App;
