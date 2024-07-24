import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loancalc from './Components/Loancalc';
import SimpleIntrest from './Components/SimpleIntrest';
import Product from './Components/Product';
import Speaker from './Components/SpeakerNew';
import Lightfunction from './Components/Lightfunction';
import FetchData from './Components/FetchData';
import ExpenseTracker from './Components/ExpenseTracker';
import Formprac from './Components/Formprac';
import { Remote } from './Components/Remote';
import Propsstate from './Components/Propsstate';
import Asyawai from './Components/Asyawai';

function App() {
  const handleclick=()=>{
    alert("hello")
  }

  return (
   <div >
    {/* <Loancalc/> */}
    {/* <SimpleIntrest/> */}
    {/* <Product/> */}
    {/* <Speaker/> */}
    {/* <Lightfunction/> */}
    {/* <FetchData/> */}
    {/* <ExpenseTracker/> */}
    {/* <Formprac/> */}
    {/* <Remote/> */}
    {/* <Propsstate name="spandana" age={30} handleclick={()=>handleclick}/> */}
<Asyawai/>
   </div>
  );
}

export default App;
