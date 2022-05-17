
import './App.css';
import {Routes,Route} from 'react-router-dom';
import { CreateQuestion } from './components/CreateQuestion';
import { EditQuestion } from './components/EditQuestion';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/"  exact element={<EditQuestion/>}/>
    <Route path="/createQuestion" element={<CreateQuestion/>}/>
      <Route path="/editQuestion" element={<EditQuestion/>}/>
    </Routes>
    </>
  );
}

export default App;
