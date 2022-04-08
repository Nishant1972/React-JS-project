import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';


function App() {
  return (
    <>
    <Navbar title = "MedCons"/>
    <div className="container my-3">
      <TextForm heading = "Enter the Text to analyse " />
    </div>
    </>
  );
}

export default App;
