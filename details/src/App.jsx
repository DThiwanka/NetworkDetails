import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Ipaddress from "./components/Ipaddress";
import Homepage from "./components/Homepage";
import Macaddress from "./components/Macaddress";
import DeviceDetails from "./components/DeviceDetails";



function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/ip" element={<Ipaddress />} />
          <Route path="/mac" element={<Macaddress />} />
          <Route path="/details" element={<DeviceDetails />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>


      </Router>
    </div>
    
  );
}

export default App;
