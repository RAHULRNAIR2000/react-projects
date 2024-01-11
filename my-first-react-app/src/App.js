// import logo from './logo.svg';
import './App.css';
import GbyWorld from './components/GbyWorld';
import HelloWorld from './components/HelloWorld';
import ParentComponent from './components/ParentComponent';
import {RecoilRoot} from "recoil";
import Counter from "./components/Counter";
function App() {
  var age = 19;




  return (
    <div>

      <RecoilRoot>
      <Counter/>
      </RecoilRoot>
      
    </div>
  );
}

export default App;
