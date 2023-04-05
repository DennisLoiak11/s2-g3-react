import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';
import Main from './components/Main';
import MyFooter from './components/MyFooter';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from './components/MovieDetails';


function App() {
  return (
    <>
    <BrowserRouter>
      <MyNav/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/MovieDetails/:id' element={<MovieDetails/>}/>
      </Routes>
    <MyFooter/>
    </BrowserRouter>
    </>
  );
}

export default App;
