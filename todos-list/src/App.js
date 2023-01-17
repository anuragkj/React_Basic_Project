// import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './MyComponents/Header'; //Brackets not put since the export function is default not named
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';

function App() {
  return (
    <>
      <Header title="My Todos List" searchBar={true}/>
      <Todos/>
      <Footer/>
    </>
    
  );
}

export default App;
