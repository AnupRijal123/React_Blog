import './index.css';
import Navbar from './Navbar';
import Home from './Home';
function App() {
  // const title="this is data";
  // const person={
  //   Name:'ram',
  //   Age:20
  // };
//  let link="http://www.google.com";
  return (
   <div className="main-container">
    <Navbar/>
    
    <div className="content-div">
      <Home/>
    </div>

   </div> 
  );
}

export default App;
