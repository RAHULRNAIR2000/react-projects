import Form from './pages/Form';
import { RecoilRoot } from 'recoil';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import Part2 from './pages/Part2';
import StartingPage from './pages/StartingPage';
import Part1 from './pages/Part1';

function App() {
  return (
    <RecoilRoot>

    <BrowserRouter>
    
     <Routes>
    
      <Route index element={<StartingPage/>}/>
      
      <Route path="part2" element={<Part2/>}/>
      <Route path="part1" element={<Part1/>}/>
    

     </Routes>
    </BrowserRouter>
    </RecoilRoot>
   
  );
}

export default App;
