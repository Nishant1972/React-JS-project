import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';


const call = () => {
  return 'Text Us';
}

function App() {
  return (
    <>
    <Navbar title = {call()}/>
    <div className="container my-3">
      <TextForm heading = "Enter the Text to analyse " />
    </div>
    </>
  );
}

export default App;
