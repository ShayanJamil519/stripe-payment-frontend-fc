import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Success from './Success';
import Error from './Error';

function App() {

  

  return (
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/success" element={<Success />} />
    <Route path="/error" element={<Error />} />
    

   </Routes>
   
  );
}

export default App;

