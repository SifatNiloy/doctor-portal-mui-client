import logo from './logo.svg';
import './App.css';
import { Route, Router } from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
      </Router>
    </div>
  );
}

export default App;
